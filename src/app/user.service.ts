import { Injectable } from '@angular/core';
import { cartproduct } from './prod.interface';
import { ToastrService } from 'ngx-toastr';


export interface User {
  username: string,
  password: string,
  email: string,
  cart: Array<cartproduct>,
  login : boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user!: User;
  public userLoggedIn: boolean = false;
  
  constructor(private toastrSer: ToastrService) { 
      const loggedInUser = sessionStorage.getItem('loggedInUser');
      console.log(loggedInUser)
      if(loggedInUser) {
          this.userLoggedIn = true;
          this.loadData(loggedInUser)
      }

  }


  public loadData(email: string) {
    console.log('in laod data');
    
     const userData  = localStorage.getItem(email);
    if (!userData) {return;}
    
    this.user = JSON.parse(userData);
    this.user.login = true;

  }

  public changeQuantit(number: number) {
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
  }

  public removeItem(name: string) {
    this.user.cart = this.user.cart.filter((item) => item.Name !== name);
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
  }


  public addToCart(item: cartproduct) {
    for (let i = 0; i < this.user.cart.length; i++) {
      if (this.user.cart[i].Name === item.Name) {
        this.user.cart[i].quantity++;
        localStorage.setItem(this.user.email, JSON.stringify(this.user));
        return;
      }
    }
    this.user.cart.push(item);
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
  }


  getCart() {
    return this.user.cart;
  }

  

}
