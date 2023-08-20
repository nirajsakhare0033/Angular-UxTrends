import { Component, OnInit } from '@angular/core';
import { MessageService } from '../appService/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css'],
})
export class Card1Component implements OnInit {
  //createing service

  constructor(private _msgService: MessageService) {}

  products:any = [];

  ngOnInit() {
    // this.products = this._msgService.product;
    this._msgService
      .product()
      .subscribe((productData) => (this.products = productData));
  }

  btnaleart() {
    this._msgService.msgbtnaleart();
  }
  // product:string="test1"
}
