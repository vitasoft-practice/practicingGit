import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators, AbstractControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  
valueCapture ="";
  checkoutForm: FormGroup;
constructor(private formBuilder: FormBuilder){
    
  this.checkoutForm = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", [Validators.required,Validators.email]],
    check: ["", Validators.requiredTrue],


    items: this.formBuilder.array([
    //   new FormControl('a'),
    //   new FormControl('a'),
    //   new FormControl('a')

      this.formBuilder.group({
        id1:['1'],
        id2:['2'],
        id3:['3']
      })

    ])
  });
}



  //   checkoutForm = new FormGroup({
  //   name: new FormControl("",Validators.required),
  //   email: new FormControl("",[Validators.required,Validators.email]),
  //   check: new FormControl("",Validators.requiredTrue)
  // });
    


  
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
     this.resetForm();
   };
   
   resetForm(){
     this.checkoutForm.reset();
   };

  ngOnInit(): void {
// ------------------------ valueChanges() --------------////
    this.checkoutForm.get('name')?.valueChanges.subscribe(data =>{
      this.valueCapture = data;
      
    })
    // this.checkoutForm.valueChanges.subscribe(datas =>{
    //   console.log(datas);
    // })

 
    console.log(this.checkoutForm.get('items')?.value);
    

// -------------------------statusChange () Vitasoft@2021  -----------------//
// this.checkoutForm.statusChanges.subscribe(datas =>{
//   console.log(datas);
// })
// //////////// ------------ setValue() ----------- //////////
//  this.checkoutForm.setValue({
//    name:'Miss',
//    email:'@gmail',
//    check:'true'
//  })
// //////////// ------------ patchValue() ----------- //////////    
// this.checkoutForm.patchValue({
//   name:'Mr/Miss',
//   email:'123@gmail.com'
// });

  }


  get items(){
    return this.checkoutForm.get('items') as FormArray;
  }
  addnew(){
    const itemLength = this.items.length;
    const newItem = this.formBuilder.group({

      
        id1:['2'],
        id2:[''],
        id3:['']
 
    });
    this.items.push(newItem);
  }

}
