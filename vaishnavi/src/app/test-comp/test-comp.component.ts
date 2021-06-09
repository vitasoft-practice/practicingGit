import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.scss']
})
export class TestCompComponent implements OnInit {

  constructor() { }

  pipes = {
    fname:'vaish',
    lname:'mano',
    dob:'10/19/1999',
    salary:'1000.57'
  }

  place ={
    city:'chennai'
  }

  ngOnInit(): void {
  }

}
