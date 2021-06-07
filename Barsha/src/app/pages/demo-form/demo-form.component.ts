import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


interface formdata {
  name:string;
  sub:string;
}

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
 
  formData:formdata[] =[];
   
  profileForm = new FormGroup({
    name : new FormControl(''),
    sub : new FormControl(''),
  });
  
  ishidden: Boolean ;
  show(): void{
   
    // console.log("clicked");
    this.ishidden=false;
    
  }
  constructor() { 
    this.ishidden = true;
    // this.formData=[];
  }

  ngOnInit(): void {
  }

 onSubmit(){
  //  this.formData.push(this.profileForm.value);
  this.formData.push(this.profileForm.value);
   console.log(this.formData);
   
 }

}
