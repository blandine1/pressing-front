import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Utilisateur} from "./model/Utilisateur";
import {Service} from "./model/Service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  host:string='http://localhost:9090/gestionpressing/v1/caissiere';
  constructor(private http:HttpClient) {

  }

  getAllUtilisateurs():Observable<Utilisateur[]>{
     return  this.http.get<Utilisateur[]>(this.host+'/utilisateur/all');
  }

  onSaveUtilisateur(utlisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.host+ '/utilisateur/create', utlisateur);
  }

  getOneUTILISATEUR(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.host+'/utilisateur/find/'+id);
  }
}
