import { Component } from '@angular/core';
import { messages } from './models/messages';
import {MessagesService } from './models/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydist';
  chatarray:messages;
  constructor(private messageService: MessagesService) {
    this.chatarray = this.messageService.addmessages();
}
}
