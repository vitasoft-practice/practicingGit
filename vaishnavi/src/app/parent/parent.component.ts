import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, OnDestroy {

  cnameInParent ='VaishMano';
  mgsFromChild ='';
  show=false;
  constructor() { }

  ngOnInit(): void {
    console.log('oninit occured');

    // setInterval(()=>{
    //   console.log(new Date());
      
    // },1000)
    
  }
  ngOnChanges():void{
    console.log('onchange occured');
    
  }
  ngOnDestroy():void{
    console.log('destroyed????');
    
  }

  toggle(){
    this.show = !this.show;
  }

  receiveMessage(e){
    this.mgsFromChild = e;
  }

}
