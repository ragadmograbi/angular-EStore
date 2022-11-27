import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/user.service';

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


  public usrname: string = this.user.user.username;

  constructor(private router: Router, private user: UserService) { }

  ngOnInit(): void {
     
    this.usrname = this.user.user.username;
  }

  async navigate(domain: number) {
    switch(domain){
      case 1:await this.router.navigateByUrl('/store'); break;
      case 2: await this.router.navigateByUrl('/cart'); break;
    }
      
  }

  public logOut(){
    this.user.user.login = false;
  }



  
}
