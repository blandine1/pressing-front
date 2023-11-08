import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientsService} from "../../clients.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent  implements OnInit{

  clientId!:number;
  clientFormGroup!:FormGroup;
  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private clientService:ClientsService,
              private fb:FormBuilder,
              private toaster:ToastrService,
              private router:Router) {
    this.clientId=this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.clientService.getOneClient(this.clientId).subscribe(client=>{
      console.log(client);
      this.clientFormGroup=this.fb.group({
        id:[client.id, Validators.required],
        firstName:[client.firstName, Validators.required],
        lastName:[client.lastName, Validators.required],
        phoneNumber:[client.phoneNumber, Validators.required]
      })
    });
  }

  onUpdateClient() {
    this.submitted=true;
      this.clientService.onSaveClient(this.clientFormGroup?.value).subscribe(data=>{
        console.log(data);
        this.toaster.success("updated successfuly");
        this.router.navigateByUrl("client");
      },error => {
        this.toaster.error("echec de la modification");
      })
  }
}
