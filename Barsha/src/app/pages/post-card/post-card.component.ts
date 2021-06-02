import { Component, OnInit , Input  } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() name : string;
  ishidden: Boolean =true ;
  show(): void{
   
   
      this.ishidden=false;
    
   
    
  }
  constructor() {
    this.name=''
   }

  ngOnInit(): void {
  }

}
