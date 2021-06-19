import { Component, OnInit } from '@angular/core';
import { PriceServiceService } from 'src/app/price-service.service';
 import {Store , select} from "@ngrx/store";
// import {User} from "../../user";
//  import * as UserActions from "../../user.actions";
//  import * as fromUser from "../../user.selectors";
//decorators- metadata added to our code
@Component({
  selector: 'app-homepage', //to use this comp in our markup
  templateUrl: './homepage.component.html', //load our template from the file
  styleUrls: ['./homepage.component.scss'],
  providers :[PriceServiceService]
})
export class HomepageComponent implements OnInit {

  names :string[];
  
  curdate = Date.now();
  // users : User[] =[];
  errormsg="";
  constructor(private ps : PriceServiceService , private store : Store){
    this.names = ['Barsha' , 'Carlos' , 'Henry' , 'Natalie'];
   
  }

  
 
  ngOnInit(): void {

    // this.store.dispatch(new UserActions.LoadUsers());
    // this.store.pipe(select(fromUser.getUsers)).subscribe(
    //   users=>{
    //     this.users = users;
    //   }
    // )
    
  }

}
