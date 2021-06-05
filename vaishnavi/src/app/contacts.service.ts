import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }
  

 getContacts(){
  // [contactList] = useState([] as any);
  const contactList = Array(
    {contactId: 1, contactName: 'vaish'},
    {contactId: 1, contactName: 'mano'},
    {contactId: 1, contactName: 'milk'},
    {contactId: 1, contactName: 'water'}
  );

  return contactList;
 }
  

  
}
