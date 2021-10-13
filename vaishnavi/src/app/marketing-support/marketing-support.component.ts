import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-support',
  templateUrl: './marketing-support.component.html',
  styleUrls: ['./marketing-support.component.scss']
})
export class MarketingSupportComponent implements OnInit {
  
  support_image:string="assets/images/support.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
