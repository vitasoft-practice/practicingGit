import { Component, OnInit } from '@angular/core';
import { PriceServiceService } from 'src/app/price-service.service';
 
//decorators- metadata added to our code
@Component({
  selector: 'app-homepage', //to use this comp in our markup
  templateUrl: './homepage.component.html', //load our template from the file
  styleUrls: ['./homepage.component.scss'],
  providers :[PriceServiceService]
})
export class HomepageComponent implements OnInit {

  names :string[];
  
  curdate = Date.now();
 
  constructor(private ps : PriceServiceService){
    this.names = ['Barsha' , 'Carlos' , 'Henry' , 'Natalie'];
   
  }

  courses= this.ps.courses;
 
  ngOnInit(): void {
    
  }

}
