import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../utilisateur-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit{

  utilisateurFormGroup!: FormGroup;
  submitted:boolean=false;
  constructor(private utilisateur:UtilisateurService, private fb:FormBuilder, private toaster:ToastrService, private router:Router) {
  }
  ngOnInit(): void {
    this.utilisateurFormGroup=this.fb.group({
      name:["", Validators.required],
      prenom:["", Validators.required],
      email:["", Validators.required],
      dateDeNaissance:["", Validators.required],
      password:["", Validators.required],
      status:[true, Validators.required]
    });
  }

  onSaveUtilisateur() {
    this.submitted=true;
    if(this.utilisateurFormGroup.invalid) return;
    console.log(this.utilisateurFormGroup.value);
    this.utilisateur.onSaveUtilisateur(this.utilisateurFormGroup?.value).subscribe(data=>{
      this.toaster.success(data.name+ " is created successfully");
       this.router.navigateByUrl('utilisateur');
    }, error => {
      this.toaster.success("some thing when wrong");
    })
  }

}
