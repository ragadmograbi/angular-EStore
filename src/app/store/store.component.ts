import { Component, OnInit } from '@angular/core';
import { product } from '../prod.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  
  public products: Array<product> = [];
  public cnt!: number;
  showStore: boolean = false;




  constructor() { }

  async ngOnInit(): Promise<void> {
    await this.loadData();
  }

  async loadData() {
    
    this.products = [{
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
    this.showStore = true;

    this.cnt = this.products.length;
  }

  

}
