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
    
    this.items = [{
      Name: "cowboy hat",
      Price: 10,
      image_name: "cowboy-hat.png"},
      {Name: "hoodies",
        Price: 20,
        image_name: "hoodies.png"},
      {Name: "sun hat",
      Price: 30,
      image_name: "sun-hat.png"},
      {Name: "sweater",
        Price: 40,
        image_name: "sweater.png"}]
    
  }

}
