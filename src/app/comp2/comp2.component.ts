import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component {
  username: any;
  constructor(private _comp1: MessageService) {
    this, _comp1.username.subscribe((box) => (this.username = box));
  }
  comp2(box){
    this._comp1.OnChanged(box)
  }
}
