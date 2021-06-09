import { Component, OnInit } from '@angular/core';
 
//decorators- metadata added to our code
@Component({
  selector: 'app-homepage', //to use this comp in our markup
  templateUrl: './homepage.component.html', //load our template from the file
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  names :string[];
  
  curdate = Date.now();
 
  constructor(){
    this.names = ['Barsha' , 'Carlos' , 'Henry' , 'Natalie'];
   
  }


  ngOnInit(): void {
  }

}
