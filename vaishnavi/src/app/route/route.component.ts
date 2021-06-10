import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {

  parama ='';
  paramb ='';
  paramc ='';
  constructor(private activatedRoute: ActivatedRoute) { 
    // this.activatedRoute.params.subscribe(s =>{
      this.activatedRoute.queryParams.subscribe(s =>{
      this.parama = s.a;
      this.paramb = s.b;
      this.paramc = s.c;
    })
  }

  ngOnInit(): void {
  }

}
