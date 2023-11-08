import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../utilisateur-service.service";
import {Utilisateur} from "../model/Utilisateur";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit{

  utilisateurs:Utilisateur[]|null = null;
  constructor(private utilisateurService:UtilisateurService, private router:Router, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
     this.getAllUtilisateurs();
  }

  getAllUtilisateurs(){
    this.utilisateurService.getAllUtilisateurs().subscribe(data=>{
      console.log(data);
      this.utilisateurs=data;
    }, error => {
      console.log(error)
    })
  }

  onGetUtlisateur(u:Utilisateur){
    this.router.navigateByUrl('utilisateur/find/' +u.id);
  }

}
