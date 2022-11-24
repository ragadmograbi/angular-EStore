import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/prod.interface';



@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})


export class StoreItemComponent implements OnInit {
  
  @Input() data!: product;

  constructor(){
  
  }
  ngOnInit(): void {
  }


  async addItemToCart() {
    
  }

}
