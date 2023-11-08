import {Component, OnInit} from '@angular/core';
import {Produit} from "../../model/produit";
import {ServiceService} from "../../service.service";
import {ClientsService} from "../../clients.service";
import {Service} from "../../model/Service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LigneProduit} from "../../model/ligneProduit";
import {count} from "rxjs";
import {Client} from "../../model/Client";
import {ProduitService} from "../../produit.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newproduit',
  templateUrl: './newproduit.component.html',
  styleUrls: ['./newproduit.component.scss']
})
export class NewproduitComponent implements OnInit{


  listLigneProduit:LigneProduit[]=[];

  produit:Produit = new Produit();

  services:Service[]=[];

  clients:Client[]=[];

  produiFormBuilder!:FormGroup;

  ligneProduit:LigneProduit = new LigneProduit();

  currentUpdate:number;
  currentStatus:boolean=false;

  submitted:boolean;

  constructor(private serviceService:ServiceService,
              private client:ClientsService,
              private fb:FormBuilder,
              private router:Router,
              private produitSeervice:ProduitService,
              private toaster:ToastrService) {
  }
  ngOnInit(): void {
    this.getAllServices();
    this.getAllClient();
     /* this.produiFormBuilder=this.fb.group({
        prix:["", Validators.required],
        quantite:["", Validators.required],
        description:["", Validators.required],
        vetement:["", Validators.required],
        service:["", Validators.required],
      });*/
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

  addproduit() {
    this.listLigneProduit.push(this.ligneProduit);
   // this.calculPrixtotalPartiel();
    this.prixTotal();
    this.conteId();
    console.log(this.listLigneProduit);
    this.ligneProduit=new LigneProduit();
  }

  remove(index: number) {
    this.listLigneProduit.splice(index, 1);
    this.prixTotal();
    console.log(this.listLigneProduit);
  }

  calculPrixTotalPartielle(){
    this.ligneProduit.prixTotalPartiel=this.ligneProduit.prix*this.ligneProduit.quantite;
  }
  prixTotal(){
    this.produit.prixTotal=0;
    for (let i=0; i<this.listLigneProduit.length;i++){
      this.produit.prixTotal = this.listLigneProduit[i].prixTotalPartiel + this.produit.prixTotal;
    }
    console.log(this.produit.prixTotal);
  }
  saveProduit() {
    this.produit.listeLigneProduit = this.listLigneProduit;
    console.log(this.produit);
    this.produitSeervice.onSaveProduit(this.produit).subscribe(data=>{
      this.toaster.success( "Successfully");
      console.log(data);
      this.produit=new  Produit();
      this.listLigneProduit=[];
      this.router.navigateByUrl('produit');
    }, error => {
      this.toaster.error("An error occured. Is client Selected");
      console.log(error);
    })
  }

  conteId(){
    for (let i=0; i<this.listLigneProduit.length-1;i++){
      i=i++;
    }
  }

  update() {
    this.prixTotal();
    this.ligneProduit= new LigneProduit();
    this.currentStatus=false;
  }

  edit(l: any, index: number) {
    this.currentUpdate=index;
    this.currentStatus=true;
    this.ligneProduit=l;
  }

}
