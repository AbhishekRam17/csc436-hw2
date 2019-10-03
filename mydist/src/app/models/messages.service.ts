import { Injectable } from '@angular/core';
import { message } from './message';
import { messages } from './messages';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  chatarray:messages;
  
  
  

  constructor() { 
  
  }
  addmessages():messages{
  var me:message = new message();
  me.text = "help me"
  me.timestamp= new Date;

 var marray:messages = new messages();
 marray.chatarray=[me];
 return marray;
  } 
  
}
