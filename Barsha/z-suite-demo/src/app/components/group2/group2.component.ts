import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-group2',
  templateUrl: './group2.component.html',
  styleUrls: ['./group2.component.scss'],
  providers : [ZSuiteService]
})
export class Group2Component implements OnInit {

  constructor(private zs : ZSuiteService) { }

  ngOnInit(): void {
  }

}
