import { Injectable } from '@angular/core';
import { cartproduct } from './prod.interface';
import { ToastrService } from 'ngx-toastr';


export interface User {
  username: string,
  password: string,
  email: string,
  cart: Array<cartproduct>
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user!: User;
  
  constructor(private toastrSer: ToastrService) { }


  public loadData(email: string) {
    const userData  = localStorage.getItem(email);
    if (!userData) {return;}
    this.user = JSON.parse(
      userData
    );
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
    // localStorage.removeItem(this.user.email);
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
  }


  getCart() {
    return this.user.cart;
  }

  

}
