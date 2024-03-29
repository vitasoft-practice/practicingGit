import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {

  data:Object={};
  loading:boolean=true;
  constructor( private http: HttpClient) { 

  }

  makeRequest(): void{
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data=>{
      this.data = data;
      this.loading = false;
    })
  }
  ngOnInit(): void {
  }

}
