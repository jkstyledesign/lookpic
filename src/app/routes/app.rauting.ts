import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../accounts/login/login.component';

const APP_ROUTS: Routes = [
   {path: '', component: HomeComponent },
   {path: 'home', component: HomeComponent }, 
   {path: 'login', component: LoginComponent },
   {path: 'signup', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTS)
      ],
      exports: [
        RouterModule
      ]
})
export class AppRoutingModule { }