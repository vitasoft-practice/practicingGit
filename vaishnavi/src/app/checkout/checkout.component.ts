import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  

//   checkoutForm: FormGroup;
// constructor(private formBuilder: FormBuilder){
    
//   this.checkoutForm = this.formBuilder.group({
//     name: ["", Validators.required],
//     email: ["", [Validators.required,Validators.email]],
//     check: ["", Validators.requiredTrue]
//   });
// }


    checkoutForm = new FormGroup({
    name: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required),
    check: new FormControl("",Validators.requiredTrue)
  });
    


  get email(){return this.checkoutForm.get('email')};
    // imp
    // checkoutForm: FormGroup;
    // constructor(){
    //   this.checkoutForm = new FormGroup({
    //     name: new FormControl("",Validators.required),
    //     email: new FormControl("",Validators.required),
    //     check: new FormControl("",Validators.requiredTrue)
    //   });
    //     }




  // checkoutForm = new FormGroup({
  //   name: new FormControl(''),
  //   email:new FormControl(''),
  //   check: new FormControl('')
  // })
// elem =false ;
//   email(){
//     this.elem = checkoutForm.value.email;
//   }
   postData(){
     console.log(this.checkoutForm);
     console.log(this.checkoutForm.value);
     
   };
   
   

  ngOnInit(): void {


    


    // this.checkoutForm = new FormGroup({
    //   name: new FormControl(this.hero.name,[
    //     Validators.required,
    //     Validators.minLength(4)
    //   ])
        
    //   });



    // testinggg

    
  }
}
