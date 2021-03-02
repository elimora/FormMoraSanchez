import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {

  user={
    email:'',
    password:''

  }

  constructor() { }

  ngOnInit() {
  }

  signUp(){
    console.log(this.user)
  }
}
