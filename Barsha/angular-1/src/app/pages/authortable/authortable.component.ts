import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-authortable',
  templateUrl: './authortable.component.html',
  styleUrls: ['./authortable.component.scss']
})
export class AuthortableComponent implements OnInit {
  @Input() name:string;
  @Input() sub :string;
  @Input() addr :string;

  constructor() { 
    this.name='';
    this.sub='';
    this.addr='';
  }

  ngOnInit(): void {
  }

}
