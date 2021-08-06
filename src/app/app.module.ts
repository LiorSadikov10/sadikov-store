import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule} from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThanksComponent } from './components/thanks/thanks.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    ThanksComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
