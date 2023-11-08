import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceService} from "../service.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup;
  submitted:boolean=false;
  constructor(private service:ServiceService,
              private fb:FormBuilder,
              private toaster:ToastrService,
              private router:Router) {
  }
  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:["", Validators.required],
      password:["", Validators.required],
    });
  }

  login() {
     console.log(this.loginForm.value);
  }
}
