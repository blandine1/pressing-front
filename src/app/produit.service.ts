import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produit} from "./model/produit";
import {LigneProduit} from "./model/ligneProduit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  host:string = 'http://localhost:9090/gestionpressing/v1/caissiere';

  getAllFalseProduits():Observable<Produit[]>{
     return this.http.get<Produit[]>(this.host + "/produit/false/allFalse");
  }

  onSaveProduit(produit:Produit):Observable<Produit[]>{
    return  this.http.post<Produit[]>(this.host + "/produit/create", produit);
  }

  onUpdateProduit(produit:Produit):Observable<Produit[]>{
    return  this.http.put<Produit[]>(this.host + "/produit/update", produit);
  }
  getProduitById(id:number):Observable<Produit>{
    return this.http.get<Produit>(this.host + "/produit/findProduitLigneCommande/" + id);
  }

  getAllTrueProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.host + "/produit/true/allTrue");
  }

  getProduitByclientTrue(phone:string):Observable<Produit[]>{
    return this.http.get<Produit[]>(this.host + "/produit/alltrue/" + phone);
  }

  getProduitByclientFalse(phone:string):Observable<Produit[]>{
    return this.http.get<Produit[]>(this.host + "/produit/allfalse/" + phone);
  }

}
