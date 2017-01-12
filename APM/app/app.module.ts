import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';;
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule ,
    HttpModule, 
    RouterModule.forRoot([
      {path:"welcome", component: WelcomeComponent},
      {path:"**", redirectTo: "welcome",pathMatch:"full"}
    ]),
    ProductModule
  ],
  declarations: [ 
    AppComponent ,
    WelcomeComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
