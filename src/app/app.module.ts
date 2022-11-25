import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { StoreItemComponent } from './store/store-item/store-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: '', component: SignInComponent },
  { path: 'signUP', component: SignUpComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SignInComponent,
    SignUpComponent,
    StoreComponent,
    CartComponent,
    StoreItemComponent,
    NavbarComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
