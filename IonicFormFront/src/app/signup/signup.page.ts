import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../app/services/auth.service";
import { Router } from "@angular/router";



@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})


export class SignupPage implements OnInit {

  user={

    id:85,
    name:'',
    email:'',
    password:'',
    password2:''

  }

  constructor(private authServise:AuthService,private router:Router) { }

  ngOnInit() {
  }

  signUp(){
    this.authServise.signUp(this.user)
    .subscribe(
      res=>{
        console.log(res),
        //local recibe nombre y valor
        localStorage.setItem('token',res.token),
        this.router.navigate(['/private-form'])

      },
      err=>console.log(err)
    )
  }
}
