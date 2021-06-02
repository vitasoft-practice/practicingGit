import { Component, OnInit , Input  } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() name : string;
  likes:number;
  dislikes:number;
  ishidden: Boolean =true ;
  show(): void{
      this.ishidden=false;
    }
      like():number{
        return this.likes+=1;
    }
    dislike():number{
      return this.dislikes +=1;
    }
  constructor() {
    this.name=''
    this.likes=0;
    this.dislikes=0;
   }

  ngOnInit(): void {
  }

}
