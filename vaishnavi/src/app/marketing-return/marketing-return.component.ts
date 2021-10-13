import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-return',
  templateUrl: './marketing-return.component.html',
  styleUrls: ['./marketing-return.component.scss']
})
export class MarketingReturnComponent implements OnInit {
  well_pro_image:string="assets/images/proz-marketing.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
