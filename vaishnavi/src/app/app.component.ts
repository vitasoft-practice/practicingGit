import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';

  // structural directive practice
  answer=['a'];

  elements =[
    {id:1, name:'vnnn'},
    {id:2, name:'kkk'},
    {id:3, name:'aaaa'},
  ];

  onAdd(){
    this.elements.push({id:4 , name:'last'});
  }

  onRemove(element){
    let num1 = this.elements.indexOf(element);
    this.elements.splice(num1,1);
  }

  // attribute directive practice
 highlightColor = 'black';
 defaultstyle = false;
  highlight(color:string){
    this.highlightColor = color;
  }
  

  styleChange(){
    this.defaultstyle = !this.defaultstyle;
  }

// practice task

nums=[1,2,3,4,5,6];
colorCode='green'

// /////////////////////////////////
currentItem ='vaishnavi'
save = false

items =[
  {id:1, name:'vnnn'},
  {id:2, name:'kkk'},
  {id:3, name:'aaaa'},
];

getValue(e){
  return (e.target as HTMLInputElement).value;
}
upperCase(e){
  this.currentItem = e.toUpperCase();
}


}
