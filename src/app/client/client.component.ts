import {Component, OnInit} from '@angular/core';
import {ClientsService} from "../clients.service";
import {Client} from "../model/Client";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit{

  clients:Client[] = [];
  constructor(private clientservice:ClientsService, private router:Router, private toaster:ToastrService) {
  }

  ngOnInit(): void {
    this.getAllClient();
  }
  getAllClient(){
    this.clientservice.getAllClient().subscribe(data=>{
      console.log(data);
      this.clients=data;
    }, error => {
      console.log(error)
    })
  }

  onEdit(c:Client){
     this.router.navigateByUrl("/client/"+c.id)
  }

  onDeleteClient(c:Client) {
    this.clientservice.onDelete(c.id).subscribe(data=>{
      console.log(data);
      this.getAllClient();
    }, error => {
      console.log(error);
    })
  }
}
