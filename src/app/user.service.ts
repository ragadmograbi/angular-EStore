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

  loadData(email: string) {
    const userData  = localStorage.getItem(email);
    if (!userData) {return;}
    this.user = JSON.parse(
      userData
    );
  }

  getCart() {
    return this.user.cart;
  }

  

}
