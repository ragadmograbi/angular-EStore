import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public _email: string = '';
  public _password: string = '';
  public _repassword: string = '';
 

  constructor( private toastrSer: ToastrService) { }

  ngOnInit(): void {
  }
  public signup() {
      console.log(this._email, this._password)
      // validate inputs
      const checkAccount = localStorage.getItem(this._email);
      if (checkAccount) {
        this.toastrSer.error('you already have an account sign in')
        return;
      }

      if(!this.strongPass()){
        return
      }

      if(this._password !== this._repassword){
        this.toastrSer.error('incorrect password: repassword doesn\' match your password')
        return;
      }

      const account: User = {
        password: this._password,
        username: this._email.split('@')[0],
        email: this._email,
        cart: []
      };
      localStorage.setItem(this._email, JSON.stringify(account));
  }

  public strongPass(){
    var upperCaseLetters = /[A-Z]/g;
    if(this._password.length < 6){
      this.toastrSer.error('Password length should be at least 6 letters')
      return false;
    }

    if(!this._password.match(upperCaseLetters)){
      this.toastrSer.error('Password should contain at least 1 Capital Letter')
      return false;
    }

    return true;
  }
}
