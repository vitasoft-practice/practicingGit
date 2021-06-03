import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  cnameInParent ='VaishMano';
  mgsFromChild ='';

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(e){
    this.mgsFromChild = e;
  }

}
