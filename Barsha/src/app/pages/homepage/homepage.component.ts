import { Component, OnInit } from '@angular/core';
 
//decorators- metadata added to our code
@Component({
  selector: 'app-homepage', //to use this comp in our markup
  templateUrl: './homepage.component.html', //load our template from the file
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  names :string[];
  ishidden: Boolean ;
  show(): void{
   
    // console.log("clicked");
    this.ishidden=false;
    
  }

  addIdea(postTitle :HTMLInputElement, descr :HTMLInputElement) :boolean{
    console.log(`${postTitle.value} and ${descr.value}`);
    return false;
  }
  constructor(){
    this.names = ['Barsha' , 'Carlos' , 'Henry' , 'Natalie'];
    this.ishidden = true;
   
  }


  ngOnInit(): void {
  }

}
