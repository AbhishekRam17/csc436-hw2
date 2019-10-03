import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
 
  constructor() { }

  likeImage(liken:boolean) {
    
    return !liken;
  }


}