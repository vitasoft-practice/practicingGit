import { Component, OnInit, Input } from '@angular/core';
import { PriceServiceService } from 'src/app/price-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [PriceServiceService]
})
export class CoursesComponent implements OnInit {
  
  price = this.ps.coursePrice();
  courses = this.ps.courses; 

  constructor(private ps: PriceServiceService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(param => 
      {
       
        console.log(param);
      });
    
   }

  ngOnInit(): void {
   
  }

}
