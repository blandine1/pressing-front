import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceService} from "../../service.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.scss']
})
export class EditServicesComponent implements OnInit{

  serviceId!:number;
  serviceFormGroup!:FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private services:ServiceService,
              private toaster:ToastrService,
              private router:Router) {
    this.serviceId=this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.services.getOneService(this.serviceId).subscribe(service=>{
      console.log(service);
      this.serviceFormGroup=this.fb.group({
        id:[service.id, Validators.required],
        name:[service.name, Validators.required],
        description:[service.description, Validators.required],
      })
    });
  }

  onUpdateservice() {
    this.submitted=true;
    this.services.saveService(this.serviceFormGroup?.value).subscribe(data=>{
      console.log(data);
      this.toaster.success("updated successfuly");
      this.router.navigateByUrl('services')
    },error => {
      this.toaster.error("echec de la modification");
    })
  }
}
