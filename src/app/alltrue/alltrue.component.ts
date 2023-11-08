import {Component, OnInit} from '@angular/core';
import {Produit} from "../model/produit";
import {LigneProduit} from "../model/ligneProduit";
import {Service} from "../model/Service";
import {Client} from "../model/Client";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProduitService} from "../produit.service";
import {ServiceService} from "../service.service";
import {ClientsService} from "../clients.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alltrue',
  templateUrl: './alltrue.component.html',
  styleUrls: ['./alltrue.component.scss']
})
export class AlltrueComponent  implements OnInit{
  produits:Produit[] = [];

  listLigneProduit:LigneProduit[]=[];

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
    this.produitService.getAllTrueProduits().subscribe(data=>{
      this.produits=data;
    }, error =>{
      console.log(error());
    })
  }

  edit(p: Produit) {
    this.router.navigateByUrl("livre/find/" + p.id);
  }

  onChearch(value: any) {
    this.produitService.getProduitByclientTrue(value.keyword).subscribe(data=>{
      this.produits=data;
    }, error =>{
      console.log(error());
    })
  }
}
