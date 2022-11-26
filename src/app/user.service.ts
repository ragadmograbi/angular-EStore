import { Injectable } from '@angular/core';
import { cartproduct } from './prod.interface';


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
  
  constructor() { }


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
    this.user.cart.push(item);
    for (let i = 0; i < this.user.cart.length; i++) {
      if (this.user.cart[i].Name === item.Name) {
        this.user.cart[i] = item;
      }
    }
    // localStorage.removeItem(this.user.email);
    localStorage.setItem(this.user.email, JSON.stringify(this.user));
  }

  public saveSignUp(email: string, pass: string) {

  }

  public checkSignUp(email: string, pass: string) {
    
    

    return 0
    
  }
  

  getCart() {
    return this.user.cart;
  }

  

}
