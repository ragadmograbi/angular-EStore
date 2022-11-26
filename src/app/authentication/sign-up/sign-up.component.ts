import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public _email: string = '';
  public _password: string = '';
  public _repassword: string = '';
 

  constructor( private router: Router,private user: UserService, private toastrSer: ToastrService) { }

  ngOnInit(): void {
  }
  public signup() {

     
      if(this.isNotValid()){
        return;
      }
      const account: User = {
        password: this._password,
        username: this._email.split('@')[0],
        email: this._email,
        cart: []
      };
      localStorage.setItem(this._email, JSON.stringify(account));

      this.user.loadData(account.email);
      this.toastrSer.success('logged in success')
      this.router.navigateByUrl('/store');
      

      

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


  public ValidateEmail()
  {

    const mail: string = this._email;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.match(mailformat))
    {
      alert("Valid email address!");
      return true;
    }
    else
    {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  public isNotValid(){
    console.log(this._email, this._password)
    // validate inputs

    if(!this.ValidateEmail()){
      return true;
    }

    const checkAccount = localStorage.getItem(this._email);
    if (checkAccount) {
      this.toastrSer.error('you already have an account sign in')
      return true;
    }

    if(!this.strongPass()){
      return true;
    }

    if(this._password !== this._repassword){
      this.toastrSer.error('incorrect password: repassword doesn\' match your password')
      return true;
    }

    return false;
  }

}
