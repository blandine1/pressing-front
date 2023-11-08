import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {ServicesComponent} from "./services/services.component";
import {ClientComponent} from "./client/client.component";
import {ProduitsComponent} from "./produits/produits.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {NewUserComponent} from "./new/new-user/new-user.component";
import {NewClientComponent} from "./new/new-client/new-client.component";
import {NewserviceComponent} from "./new/newservice/newservice.component";
import {NewproduitComponent} from "./new/newproduit/newproduit.component";
import {EditClientComponent} from "./edition/edit-client/edit-client.component";
import {EditServicesComponent} from "./edition/edit-services/edit-services.component";
import {EditUtilisateurComponent} from "./edition/edit-utilisateur/edit-utilisateur.component";
import {EditProduitComponent} from "./edition/edit-produit/edit-produit.component";
import {AlltrueComponent} from "./alltrue/alltrue.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {EdittrueComponent} from "./edition/edittrue/edittrue.component";

const routes: Routes = [
 // {path:'', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path: '', component: HomeComponent ,children:[
      {path:'utilisateur', component:UtilisateurComponent},
      {path:'services', component: ServicesComponent},
      {path:'client', component: ClientComponent},
      {path:'client/:id', component: EditClientComponent},
      {path:'utilisateur/find/:id', component: EditUtilisateurComponent},
      {path:'service/find/:id', component: EditServicesComponent},
      {path:'produit/find/:id', component: EditProduitComponent},
      {path:'produit', component: ProduitsComponent},
      {path:'livre', component: AlltrueComponent},
      {path:'livre/find/:id', component: EdittrueComponent},
      {path:'categorie', component: CategorieComponent},
      {path:'newuser', component: NewUserComponent},
      {path:'newclient', component: NewClientComponent},
      {path:'newservice', component: NewserviceComponent},
      {path:'newproduit', component: NewproduitComponent},
      {path:'signup', component: SignupComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
