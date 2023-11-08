import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "./model/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  host:string='http://localhost:9090/gestionpressing/v1/caissiere';
  constructor(private http:HttpClient) {

  }

  getAllClient():Observable<Client[]>{
    return  this.http.get<Client[]>(this.host+'/Client/all');
  }
  getOneClient(id:number):Observable<Client>{
    return this.http.get<Client>(this.host+'/client/find/'+id);
  }

  onSaveClient(client:Client):Observable<Client>{
    return this.http.post<Client>(this.host+ '/client/create', client);
  }

  onUpdateClient(id:number, client:Client):Observable<Client>{
    return this.http.post<Client>(this.host+ '/client/update/'+id, client);
  }

  onDelete(id:number):Observable<Client>{
    return this.http.delete<Client>(this.host+ "/client/delete/"+id);
  }

}
