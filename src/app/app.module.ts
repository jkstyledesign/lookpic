import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { MenusComponent } from './shared/menus/menus.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CarouselComponent } from './template/carousel/carousel.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './template/features/features.component';
import { ServicesComponent } from './template/services/services.component';
import { PhotographerComponent } from './template/photographer/photographer.component'; 

import { UsersService } from './services/users.service';
import { LoginComponent } from './accounts/login/login.component'

import { AppRoutingModule } from './routes/app.rauting';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    FeaturesComponent,
    ServicesComponent,
    PhotographerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
