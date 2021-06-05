import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {
  // addIdea(newtitle :HTMLInputElement, descr :HTMLInputElement) :boolean{
  //   console.log(`${newtitle.value} and ${descr.value}`);
  //   return false;
  // }
  ishidden: Boolean ;
  show(): void{
   
    // console.log("clicked");
    this.ishidden=false;
    
  }
  constructor() { 
    this.ishidden = true;
  }

  ngOnInit(): void {
  }

  onSubmit(form :any): void {
    console.log('You submitted values',form)
  }

}
