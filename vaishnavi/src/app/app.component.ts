import { Component, OnInit } from '@angular/core';
import { combineLatest, concat, forkJoin, fromEvent, interval, Observable, of, pipe, Subscriber  } from 'rxjs';
import { map, first, filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'practice';

  constructor(){
    // const test$ = new Observable(Subscriber => {
    //   console.log('first');
    //   Subscriber.next('1');
    // });

    // test$.subscribe(x =>{
    //   console.log('second-',x);
      
    // });
    // test$.subscribe(x => console.log('Observer got a next value: ' + x));

    // -------------------pipe operators
    // const numbers$ = interval(1000).pipe(take(7));
    // numbers$.subscribe(v =>{
    //   console.log(v);
      
    // });

    // --------------creation operators-------

    // const off$ = of(1,2,3,4,5,6,7).pipe(filter(f => f%2 ==0),map(m=> m*10));

    // off$.subscribe(sub =>{
    //   console.log(sub);

      
    // });


    // operators
    // of(1, 2, 3)
    //   .pipe(map((x) => x * x *2))
    //   // .pipe(first())
    //   .subscribe((v) => console.log(`value is : ${v}`));

    // -------------join creation operators-----------//
    // const t1 = interval(1000).pipe(take(10));
    // const t2 = interval(3000).pipe(take(10));
    // // const newval = combineLatest (t1,t2);
    // // const newval = concat(t1,t2);
    // const newval = forkJoin(t1,t2);
    // newval.subscribe(x =>{
    //   console.log(x);
      
    // });
  }

  ngOnInit():void{
    // console.log('whatever...');
// --------------------------   creation operator   --------------------------
    // const some = fromEvent(<HTMLElement>document.getElementById('test'),'click')
    // some.subscribe(s=>{
    //   console.log('I am clicked');
    // });    

  }



  // structural directive practice
  // answer=['a'];

  // place ={
  //   city:'chennai'
  // }
  // elements =[
  //   {id:1, name:'vnnn'},
  //   {id:2, name:'kkk'},
  //   {id:3, name:'aaaa'},
  // ];

  // onAdd(){
  //   this.elements.push({id:4 , name:'last'});
  // }

//   onRemove(element){
//     let num1 = this.elements.indexOf(element);
//     this.elements.splice(num1,1);
//   }

//   // attribute directive practice
//  highlightColor = 'black';
//  defaultstyle = false;
//   highlight(color:string){
//     this.highlightColor = color;
//   }
  

//   styleChange(){
//     this.defaultstyle = !this.defaultstyle;
//   }

// // practice task

// nums=[1,2,3,4,5,6];
// colorCode='green'

// // /////////////////////////////////
// currentItem ='vaishnavi'
// save = false

// items =[
//   {id:1, name:'vnnn'},
//   {id:2, name:'kkk'},
//   {id:3, name:'aaaa'},
// ];

// getValue(e){
//   return (e.target as HTMLInputElement).value;
// }
// upperCase(e){
//   this.currentItem = e.toUpperCase();
// }


}
