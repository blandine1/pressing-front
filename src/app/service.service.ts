import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Service} from "./model/Service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  host:string='http://localhost:9090/gestionpressing/v1/caissiere';
  constructor(private http:HttpClient, private router:Router) { }

  onGetService() :Observable<Service[]>{
    return this.http.get<Service[]>(this.host + "/service/all");
  }

  saveService(service:Service):Observable<Service>{
    return this.http.post<Service>(this.host+"/service/create", service);
  }
  getOneService(id:number):Observable<Service>{
    return this.http.get<Service>(this.host+'/service/find/'+id);
  }
}
