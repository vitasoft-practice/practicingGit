import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZSuiteService {

  constructor() { }

  card_details=[{id :1, res :"Grow your practice with technology solutions"},
                {id :2 , res : "Developed with healthcare providers in mind"},
                {id :3 , res : "Easy-to-use apps and software"},
                {id:4 , res: "E-commerce platform design for healthcare practices"},
                {id: 5 , res : "Increase patient retention"}
                ]

}
