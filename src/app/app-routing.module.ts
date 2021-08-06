import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ThanksComponent } from './components/thanks/thanks.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'thanks', component:ThanksComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
