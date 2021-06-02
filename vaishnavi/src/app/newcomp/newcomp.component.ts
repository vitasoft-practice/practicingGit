import { Fruit } from './../fruits';
import { FRUITS } from './../fruit-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.scss']
})
export class NewcompComponent implements OnInit {

  fruits = FRUITS;
  selectedFruit:Fruit;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(fruit: Fruit): void{
    this.selectedFruit=fruit;
  }

}
