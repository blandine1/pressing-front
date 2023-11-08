import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../produit.service";
import {Produit} from "../model/produit";
import {ServiceService} from "../service.service";
import {ClientsService} from "../clients.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {LigneProduit} from "../model/ligneProduit";
import {Service} from "../model/Service";
import {Client} from "../model/Client";
import {Router} from "@angular/router";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit{

  produits:Produit[] = [];


  produit:Produit = new Produit();

  services:Service[]=[];

  clients:Client[]=[];

  produiFormBuilder!:FormGroup;

  ligneProduit:LigneProduit = new LigneProduit();

  submitted:boolean;

  constructor(private produitService:ProduitService,
              private serviceService:ServiceService,
              private client:ClientsService,
              private fb:FormBuilder,
              private produitSeervice:ProduitService,
              private toaster:ToastrService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.produitService.getAllFalseProduits().subscribe(data=>{
      this.produits=data;
    }, error =>{
      console.log(error());
    })
  }

  edit(p: Produit) {
   this.router.navigateByUrl("produit/find/" + p.id);
  }

  onChearch(value: any) {
    this.produitService.getProduitByclientFalse(value.keyword).subscribe(data=>{
      console.log(data);
      this.produits=data;
    }, error =>{
      console.log(error());
    })
  }
}
