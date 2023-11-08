import {Component, OnInit} from '@angular/core';
import {Service} from "../../model/Service";
import {ServiceService} from "../../service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-newservice',
  templateUrl: './newservice.component.html',
  styleUrls: ['./newservice.component.scss']
})
export class NewserviceComponent implements OnInit{

  serviceFormGroup!:FormGroup;
  submitted:boolean=false;
  constructor(private service:ServiceService,
              private fb:FormBuilder,
              private toaster:ToastrService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.serviceFormGroup=this.fb.group({
      name:["", Validators.required],
      description:["", Validators.required],
    });
  }

  onSaveService() {
    this.submitted=true;
    if(this.serviceFormGroup.invalid) return;
    console.log(this.serviceFormGroup.value);
     this.service.saveService(this.serviceFormGroup?.value).subscribe(data=>{
        this.toaster.success(data.name +" is created successfully");
        this.router.navigateByUrl("services");
     }, error => {
       this.toaster.error("Echec de l'enregistrement");
     })
  }
}
