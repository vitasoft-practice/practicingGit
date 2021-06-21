import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceServiceService {

  constructor() {
    
   }
   coursePrice():number{
     return 199;
   }
   courses =["Angular" , "React" , "TypeScript" , "JavaScript" , "Python"];
}
