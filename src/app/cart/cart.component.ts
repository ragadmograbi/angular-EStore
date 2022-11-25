import { Component, OnInit } from '@angular/core';
import { cartproduct } from 'src/app/prod.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public items: cartproduct[] = Array<cartproduct>();

  public totalPrice: number = 0;

  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }
  
  async loadData() {
    
  }

}
