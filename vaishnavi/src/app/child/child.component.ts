import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  cname = 'Vaishmano';

  @Output()
  sendMessageEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }


  sendMessage(e){
    this.sendMessageEmitter.emit(e.target.value);
  }
}
