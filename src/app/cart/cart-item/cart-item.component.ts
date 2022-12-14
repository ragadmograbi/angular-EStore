import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cartproduct } from 'src/app/prod.interface';
import { User, UserService } from 'src/app/user.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() itemdata!: cartproduct;

  @Output() removedItem = new EventEmitter<void>();

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  async remove() {
    this.user.removeItem(this.itemdata.Name);
    this.removedItem.emit();
  }

  async changeQuantity(number: number) {

    if(this.itemdata.quantity < 2 && number < 0) {
      return;
    }
   
    this.itemdata.quantity += number;
    this.user.changeQuantit(number);
  }



}
