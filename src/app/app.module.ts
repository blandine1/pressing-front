import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import { ServicesComponent } from './services/services.component';
import {HttpClientModule} from "@angular/common/http";
import { ClientComponent } from './client/client.component';
import { ProduitsComponent } from './produits/produits.component';
import { CategorieComponent } from './categorie/categorie.component';
import { NewUserComponent } from './new/new-user/new-user.component';
import { NewClientComponent } from './new/new-client/new-client.component';
import { NewserviceComponent } from './new/newservice/newservice.component';
import { NewproduitComponent } from './new/newproduit/newproduit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditUtilisateurComponent } from './edition/edit-utilisateur/edit-utilisateur.component';
import { EditServicesComponent } from './edition/edit-services/edit-services.component';
import { EditClientComponent } from './edition/edit-client/edit-client.component';
import { EditProduitComponent } from './edition/edit-produit/edit-produit.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import { AlltrueComponent } from './alltrue/alltrue.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EdittrueComponent } from './edition/edittrue/edittrue.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HomeComponent,
    ServicesComponent,
    ClientComponent,
    ProduitsComponent,
    CategorieComponent,
    NewUserComponent,
    NewClientComponent,
    NewserviceComponent,
    NewproduitComponent,
    EditUtilisateurComponent,
    EditServicesComponent,
    EditClientComponent,
    EditProduitComponent,
    AlltrueComponent,
    LoginComponent,
    SignupComponent,
    EdittrueComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
