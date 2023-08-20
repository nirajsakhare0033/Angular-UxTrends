import { Component } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css'],
})
export class Card2Component {
  //constructor(private _mesg.MessageService){}

  constructor(private _msg: MessageService) {}

  btn2() {
    this._msg.msgbtnaleart();
  }
 // product: string = 'test1';
 product:any={};

  ngOnInit(){
    //this.product=this._msg.product
    this._msg.product().subscribe(productData=>this.product=productData)
  }
}
