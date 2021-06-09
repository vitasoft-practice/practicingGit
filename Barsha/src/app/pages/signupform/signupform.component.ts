import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss']
})
export class SignupformComponent implements OnInit {

  signupForm = this.fb.group({
    name:['' , Validators.required],
    email:['', [Validators.required, Validators.email]],
    address:this.fb.group({
      city:[''],
      state:[''],
      zip:['']
    })
  })
  constructor( private fb:FormBuilder ) { }

  ngOnInit(): void {

  }



}
