import { Component, Input, OnInit } from '@angular/core';
import { cartproduct } from 'src/app/prod.interface';
import { User, UserService } from 'src/app/user.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() itemdata!: cartproduct;

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  async remove() {
    this.user.removeItem(this.itemdata.Name);
    
  }

  async changeQuantity(number: number) {

    if(this.itemdata.quantity < 2 && number < 0) {
      return;
    }
   
    this.itemdata.quantity += number;
    this.user.changeQuantit(number);
  }



}
