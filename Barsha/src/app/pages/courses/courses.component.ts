import { Component, OnInit, Input } from '@angular/core';
import { PriceServiceService } from 'src/app/price-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [PriceServiceService]
})
export class CoursesComponent implements OnInit {
  @Input() course:string;
  price = this.ps.coursePrice();
  
  constructor(private ps: PriceServiceService) {
    this.course ='';
    
   }

  ngOnInit(): void {
   
  }

}
