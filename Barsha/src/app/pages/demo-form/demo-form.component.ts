import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Form } from '@angular/forms';


interface formdata {
  name:string;
  sub:string;
  street:string;
  city:string;
  state:string;
  zip:number;
}

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
 
  formData:formdata[] =[];
   
  // profileForm = new FormGroup({
  //   name : new FormControl(''),
  //   sub : new FormControl(''),
    
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  profileForm = this.fb.group({
    name: [''],
    sub: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  
  ishidden: Boolean ;
  show(): void{
   
    // console.log("clicked");
    this.ishidden=false;
    
  }
  constructor(private fb:FormBuilder) { 
    this.ishidden = true;
    // this.formData=[];
  }

  ngOnInit(): void {
  }

 onSubmit(){
  //  this.formData.push(this.profileForm.value);
  this.formData.push(this.profileForm.value);
   console.log(this.profileForm.value.address);
   
 }

}
