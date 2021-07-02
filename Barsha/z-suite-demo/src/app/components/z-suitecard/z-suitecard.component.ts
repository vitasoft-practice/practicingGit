import { Component, OnInit, Input } from '@angular/core';
import { ZSuiteService } from 'src/app/z-suite.service';

@Component({
  selector: 'app-z-suitecard',
  templateUrl: './z-suitecard.component.html',
  styleUrls: ['./z-suitecard.component.scss'],
  providers: [ZSuiteService]
})
export class ZSuitecardComponent implements OnInit {

  // @Input() res:string;
  constructor( private zs: ZSuiteService) {
    // this.res="";
   }

  ngOnInit(): void {
  }
data=this.zs.card_details;
}
