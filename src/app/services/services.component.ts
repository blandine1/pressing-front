import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../service.service";
import {Service} from "../model/Service";
import {Router} from "@angular/router";
import {Client} from "../model/Client";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit{
  services:Service[]=[];
  constructor(private service:ServiceService, private router:Router) {
  }
  ngOnInit(): void {
    this.onGetService();
  }

  onGetService(){
      this.service.onGetService().subscribe(data=>{
        console.log(data);
        this.services=data;
      }, error => {
        console.log(error);
      })
  }

  onEdit(s:Service){
    this.router.navigateByUrl("/service/find/"+s.id)
  }
}
