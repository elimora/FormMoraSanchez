import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/services/auth.service";



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

  constructor(private authServise:AuthService) { }

  ngOnInit() {
  }

  signUp(){
    this.authServise.signUp(this.user)
    .subscribe(
      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }
}
