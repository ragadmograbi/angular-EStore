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
      Name: "item1",
      Price: 10,
      image_name: "1.webp"},
      {Name: "item2",
        Price: 20,
        image_name: "2.webp"},
      {Name: "item3",
      Price: 30,
      image_name: "3.webp"},
      {Name: "item4",
        Price: 40,
        image_name: "4.webp"},
        {
          Name: "item5",
          Price: 10,
          image_name: "5.webp"},
          {Name: "item6",
            Price: 20,
            image_name: "6.webp"},
          {Name: "item7",
          Price: 30,
          image_name: "7.webp"},
          {Name: "item8",
            Price: 40,
            image_name: "8.webp"}
          
      
      
      ]
    this.showStore = true;

    this.cnt = this.products.length;
  }
}
