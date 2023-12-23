import {Component, OnInit} from '@angular/core';
import {LigneProduit} from "../../model/ligneProduit";
import {Produit} from "../../model/produit";
import {Service} from "../../model/Service";
import {Client} from "../../model/Client";
import {ProduitService} from "../../produit.service";
import {ServiceService} from "../../service.service";
import {ClientsService} from "../../clients.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edittrue',
  templateUrl: './edittrue.component.html',
  styleUrls: ['./edittrue.component.scss']
})
export class EdittrueComponent implements OnInit{
  listLigneProduit:LigneProduit[]=[];
  editlistLigneProduit:LigneProduit[]=[];// variable decisive

  finalListLigne:LigneProduit[]=[];
  curectUpdate:any=null;

  produit:Produit = new Produit();

  services:Service[]=[];

  clients:Client[]=[];

  ligneProduit:LigneProduit = new LigneProduit();

  submitted:boolean;
  produitId:number;

  constructor(private produitService:ProduitService,
              private serviceService:ServiceService,
              private client:ClientsService,
              private fb:FormBuilder,
              private router:Router,
              private toaster:ToastrService,
              private activateRoute:ActivatedRoute) {
    this.produitId = this.activateRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.getAllServices();
    this.getAllClient();
    this.produitService.getProduitById(this.produitId).subscribe(data=>{
      this.listLigneProduit = data.listeLigneProduit;
      //console.log(data);
      this.produit.id=data.id;
      this.produit.prixTotal=data.prixTotal;
      this.produit.status = data.status;
      this.prixTotal();
    }, error => {
      console.log(error);
    })
  }

  // remove(index: number) {
  //   this.listLigneProduit.splice(index, 1);
  //   this.prixTotal();
  //   console.log(this.listLigneProduit);
  // }

  calculPrixTotalPartielle(){
    this.ligneProduit.prixTotalPartiel=this.ligneProduit.prix*this.ligneProduit.quantite;
  }

  updatePrixTotalPartielle(){
    this.curectUpdate.prixTotalPartiel=this.curectUpdate.prix*this.curectUpdate.quantite;
  }

  prixTotal(){
    this.produit.prixTotal=0;
    for (let i=0; i<this.listLigneProduit.length;i++){
      this.produit.prixTotal = this.listLigneProduit[i].prixTotalPartiel + this.produit.prixTotal;
    }
  }
  addproduit() {
    this.listLigneProduit.push(this.ligneProduit);
    this.prixTotal();
    this.ligneProduit=new LigneProduit();
  }

  getAllServices(){
    this.serviceService.onGetService().subscribe(service=>{
      this.services=service;
    }, error => {
      console.log(error);
    });
  }

  getAllClient(){
    this.client.getAllClient().subscribe(client=>{
      this.clients=client;
    }, error => {
      console.log(error);
    });
  }
  onChangeProduit($event: any) {
    const id = $event.target.value;
    const isCheck = $event.target.checked;
    this.editlistLigneProduit = this.listLigneProduit.map((p)=>{
      if(p.id == id){
        p.status = isCheck;
        return p;
      }
      return  p;
    });
  }

  updateProduit() {
    this.finalListLigne=this.listLigneProduit;
    this.finalListLigne=this.editlistLigneProduit;
    this.produit.listeLigneProduit = this.finalListLigne;
    console.log(this.produit);
    this.produitService.onUpdateProduit(this.produit).subscribe(data=>{
      this.toaster.success( "Successfully");
      this.produit=new  Produit();
      this.listLigneProduit=[];
      this.router.navigateByUrl("livre");
    }, error => {
      this.toaster.error("An error occured. Is client Selected");
      console.log(error);
    })
  }

  edit(l: any) {
    this.ligneProduit=l;
  }

  update() {
    this.prixTotal();
    this.ligneProduit= new LigneProduit();
  }

}
