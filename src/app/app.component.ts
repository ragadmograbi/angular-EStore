import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import {ToastContainerDirective, ToastrService} from 'ngx-toastr';
import { User, UserService } from 'src/app/user.service';

/*

<app-navbar></app-navbar>

<router-outlet></router-outlet>
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ToastContainerDirective, {static: true})
  toastContainer!: ToastContainerDirective;
  title = 'Ragad\'s EStore';
  loginFlag : boolean = false;
  constructor(private router: Router, private toastr: ToastrService,  private user: UserService) {

  }
  ngOnInit(): void {
      this.toastr.overlayContainer = this.toastContainer;
    
    this.router.events.subscribe(async (state) => {
      this.showNav();

      // console.log(this.router.url);
      if (this.router.url !== '/' && this.router.url !== '/signUP') {
        if (state instanceof NavigationEnd) {
          //const user = getItem(this.user.user);
          // const userData  = sessionStorage.getItem(this.user.user.email);

          if(!this.user.userLoggedIn){
            this.toastr.warning('login = false');
            await this.router.navigateByUrl('')
            return;
          }

          
        }
      }

    })
  }

  showNav() {
    if (this.router.url === '/' || this.router.url === '/signUP'  ) {
      return false;
    }

    return true;

  }
  
}
