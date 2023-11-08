import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientsService} from "../../clients.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit{

  clientFormGroup!:FormGroup;
  submitted:boolean=false;
  constructor(private fb:FormBuilder,
              private clientService:ClientsService,
              private toaster:ToastrService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.clientFormGroup=this.fb.group({
      firstName:["", Validators.required],
      lastName:["", Validators.required],
      phoneNumber:["", Validators.required]
    });
  }

  onSaveClient() {
    this.submitted=true;
    if(this.clientFormGroup.invalid) return;
    console.log(this.clientFormGroup.value);
    this.clientService.onSaveClient(this.clientFormGroup?.value).subscribe(data=>{
      this.toaster.success(data.firstName + " is created successfully");
      this.router.navigateByUrl('client')
    }, error => {
      this.toaster.error("An error occured. Please check informations");
      console.log(error);
    })
  }

}
