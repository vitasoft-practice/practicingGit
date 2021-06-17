import { Component, OnInit } from '@angular/core';
import {FormBuilder , Validators} from "@angular/forms";

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
      zip:['', Validators.maxLength(6)]
    })
  })

 

  onSubmit(){
    console.log(this.signupForm.value)
   console.log( this.signupForm.get('name'));
   console.log(this.signupForm.get('name')?.hasError('required'));
  }
  // getData()
  // {
  //   namecheck this.signupForm.get('name')?.hasError('required');
  // }
  constructor( private fb:FormBuilder ) {
    this.signupForm.valueChanges.subscribe(
      (form:any) =>{
        console.log(form);
      }
    );
   }

  ngOnInit(): void {

  }



}
