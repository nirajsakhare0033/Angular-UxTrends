import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
})
export class Comp3Component {
  username: any;
  constructor(private _comp1: MessageService) {
    this, _comp1.username.subscribe((box) => (this.username = box));
  }
}
