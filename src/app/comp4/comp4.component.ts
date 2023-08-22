import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css'],
})
export class Comp4Component {
  username: any;
  constructor(private _comp1: MessageService) {
    this, _comp1.username.subscribe((box) => (this.username = box));
  }
}
