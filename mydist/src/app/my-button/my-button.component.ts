import { Component, OnInit } from '@angular/core';
import{MyServiceService} from '../my-service.service'
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  liken : boolean = false;
 



  constructor(private myservice : MyServiceService ) { }

  ngOnInit() {
  }
 liker() {
  this.liken = this.myservice.likeImage(this.liken);


  // this.liken = !this.liken;
   console.log(this.liken.toString());
   
 }
}
