import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public _email: string = '';
  public _password: string = '';
  constructor(private router: Router, private user: UserService, private toastrSer: ToastrService,) { }
  ngOnInit(): void {
  }

  
  async login() {
      const user = localStorage.getItem(this._email);
      if (!user) {
        this.toastrSer.error('Invalid email, email not found, sign Up')
        return;
      }
      const data: User = JSON.parse(user);
      if (data.password !== this._password) {
        this.toastrSer.error('wrong password')
        return;
        
      }
      this.user.loadData(data.email);
      this.toastrSer.success('logged in success');
      await this.router.navigateByUrl('/store');
      
  }

  
  async signUp() {

    await this.router.navigateByUrl('/signUP');
    
}
}
