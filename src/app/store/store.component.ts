import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
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
      image_name: "1.webp"},
      {Name: "hoodies",
        Price: 20,
        image_name: "2.webp"},
      {Name: "sun hat",
      Price: 30,
      image_name: "3.webp"},
      {Name: "sweater",
        Price: 40,
        image_name: "4.webp"},
        {
          Name: "cowboy hat",
          Price: 10,
          image_name: "5.webp"},
          {Name: "hoodies",
            Price: 20,
            image_name: "6.webp"},
          {Name: "sun hat",
          Price: 30,
          image_name: "7.webp"},
          {Name: "sweater",
            Price: 40,
            image_name: "8.webp"}
          
      
      
      ]
    this.showStore = true;

    this.cnt = this.products.length;
  }
}
