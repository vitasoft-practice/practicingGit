import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email="";
  password ="";
  check ="";

  loginUser(signInForm:NgForm){
    console.log(signInForm);

    this.email = signInForm.value.emailFeild;
    this.password =signInForm.value.passwordFeild;
    console.log(signInForm.value.checkFeild);
    
  }
}
