import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder} from '@angular/forms';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  // checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  checkouForm2 = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    check: new FormControl('')
  })

   

   postData(){
     console.log(this.checkouForm2);
     console.log(this.checkouForm2.value);
     
   };

  ngOnInit(): void {

  //   this.checkoutForm = this.formBuilder.group({
  //   name:[''],
  //   email:[''],
  //   check: ['']
  // });


    // this.checkoutForm = new FormGroup({
    //   name: new FormControl(""),
    //   email: new FormControl(""),
    //   check: new FormControl("")
    // });
  }

}
