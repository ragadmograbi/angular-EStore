import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';


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
  title = 'Ragad\'s EStore';
  constructor(private router: Router) {

  }
  ngOnInit(): void {

    
    this.router.events.subscribe(async (state) => {
      this.showNav();

      console.log(this.router.url);
      if (this.router.url !== '/') {
        if (state instanceof NavigationEnd) {
          const loggedin = localStorage.getItem('isUserLogedIn');
          /*
            if (loggedin !== 'True') {
              await this.router.navigateByUrl('/cart')
          }
          */
          
          
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
