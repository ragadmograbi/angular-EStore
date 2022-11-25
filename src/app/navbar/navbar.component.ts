import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * 
 * USER
 *    username 
 *    email 
 *    password
 *    ...
 *    cart: []
 */


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
     
  
  }

  async navigate(domain: number) {
    switch(domain){
      case 1:await this.router.navigateByUrl('/store'); break;
      case 2: await this.router.navigateByUrl('/cart'); break;
    }
      
  }


  
}
