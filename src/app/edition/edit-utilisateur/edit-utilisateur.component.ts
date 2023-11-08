import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../utilisateur-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-edit-utilisateur',
  templateUrl: './edit-utilisateur.component.html',
  styleUrls: ['./edit-utilisateur.component.scss']
})
export class EditUtilisateurComponent implements OnInit{
  utilisateurFormGroup!: FormGroup;
  submitted:boolean=false;
  utilisateurId!:number;
  constructor(private utilisateur:UtilisateurService,
              private fb:FormBuilder,
              private activatedRoute:ActivatedRoute,
              private toaster:ToastrService,
              private router:Router) {
    this.utilisateurId = this.activatedRoute.snapshot.params.id;
  }
  ngOnInit(): void {
    this.utilisateur.getOneUTILISATEUR(this.utilisateurId).subscribe(utilisateur=>{
      console.log(utilisateur);
      this.utilisateurFormGroup=this.fb.group({
        id:[utilisateur.id, Validators.required],
        name:[utilisateur.name, Validators.required],
        prenom:[utilisateur.prenom, Validators.required],
        email:[utilisateur.email, Validators.required],
        dateDeNaissance:[utilisateur.dateDeNaissance, Validators.required],
        password:[utilisateur.password, Validators.required],
        status:[utilisateur.statut, Validators.required]
      })
    });
  }

  onUpdateUtlisateur() {
    this.submitted=true;
    if(this.utilisateurFormGroup.invalid) return;
    console.log(this.utilisateurFormGroup.value);
    this.utilisateur.onSaveUtilisateur(this.utilisateurFormGroup?.value).subscribe(data=>{
      this.toaster.success(data.name +" is created successfully");
      this.router.navigateByUrl("utilisateur");
    }, error => {
      this.toaster.error("echec de la modification");
      console.log(error);
    })
  }

}
