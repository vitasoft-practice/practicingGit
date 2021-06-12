import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder} from '@angular/forms';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      name: new FormControl(),
      email: new FormControl(),
      check: new FormControl()
    });
    
    this.checkoutForm.markAsDirty()
   }

   postData(){
     console.log(this.checkoutForm);
     console.log(this.checkoutForm.value);
     
   }

  ngOnInit(): void {
  }

}
