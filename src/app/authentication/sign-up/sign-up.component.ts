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
        login: true,
        cart: []
      };
      localStorage.setItem(this._email, JSON.stringify(account));

      sessionStorage.setItem('loggedInUser', this._email);
      this.user.loadData(account.email);
      this.toastrSer.success('logged in success');
      this.router.navigateByUrl('/store');
      

      

  }

  public strongPass(){
    var upperCaseLetters = /[A-Z]/g;
    if(this._password.length < 6){
      return false;
    }

    if(!this._password.match(upperCaseLetters)){
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
      return true;
    }
    else
    {
      return false;
    }
  }

  public isNotValid(){

    if(!this.ValidateEmail()){
      return true;
    }

    const checkAccount = localStorage.getItem(this._email);
    if (checkAccount) {
      return true;
    }

    if(!this.strongPass()){
      return true;
    }

    if(this._password !== this._repassword){
      return true;
    }

    return false;
  }

  public msgcheckEmail() {
    if(!this.ValidateEmail()) {
        document.getElementById('emailError')!.innerText = "* You have entered an invalid email address!";
    }
    
    const checkAccount = localStorage.getItem(this._email);
    if (checkAccount) {
      document.getElementById('emailError')!.innerText = "* you already have an account sign in";
      return ;
    }
    if(!checkAccount && this.ValidateEmail()) {
      document.getElementById('emailError')!.innerText = "";
    }

    else{
      document.getElementById('emailError')!.innerText = "You have entered an invalid email address!";
    }
  }

  public msgStrongPass() {
    var upperCaseLetters = /[A-Z]/g;
    if(this._password.length < 6){
      document.getElementById('StrongPassError')!.innerText = "* Password length should be at least 6 letters";      
    }

    if(!this._password.match(upperCaseLetters)){
      document.getElementById('StrongPassError')!.innerText = "* Password should contain at least 1 Capital Letter";      
      
    }

    if(this._password.length >= 6 && this._password.match(upperCaseLetters)){
      document.getElementById('StrongPassError')!.innerText = "";
    }

    else {
      document.getElementById('StrongPassError')!.innerText = "invalid password";
    }

  }


  
  public msgRePass() {

    if(this._password !== this._repassword){
      document.getElementById('RePassError')!.innerText = "* incorrect password: repassword doesn\' match your password";      
    }

    else{
      document.getElementById('RePassError')!.innerText = "";
    }

  }

}
