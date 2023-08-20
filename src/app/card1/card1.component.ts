import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component {
  //createing service

  constructor(private _msgService: MessageService) {}

  btnaleart() {
    this._msgService.msgbtnaleart();
  }
}
