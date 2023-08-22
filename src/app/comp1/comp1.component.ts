import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component {
  constructor(private _comp1:MessageService){
    this,_comp1.username.subscribe(box=>this.username=box)
  }
  username: string = '';
  OnChanged(box)
  { 
    //this.username=box.value;
    this._comp1.username.next(box.value)
  }
}
