import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { product } from 'src/app/prod.interface';
import { UserService } from 'src/app/user.service';



@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.scss']
})


export class StoreItemComponent implements OnInit {
  
  @Input() data!: product;

  constructor(private toastrSer: ToastrService, private userSer: UserService){
  
  }
  ngOnInit(): void {
  }


  async addItemToCart() {
    this.userSer.addToCart({
      image_name: this.data.image_name,
      Name: this.data.Name,
      Price: this.data.Price,
      quantity: 1
    });
    this.toastrSer.success('asdfasdf')
  }

}
