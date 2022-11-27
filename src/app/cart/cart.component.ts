import { Component, OnInit } from '@angular/core';
import { cartproduct } from 'src/app/prod.interface';
import { User, UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public items: cartproduct[] = Array<cartproduct>();

  public totalPrice: number = 0;

  constructor(private user: UserService) { }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }
  
  async loadData() {
        this.items = this.user.user.cart;
  }

  public update() {
    this.items = this.user.user.cart;
  }

}
