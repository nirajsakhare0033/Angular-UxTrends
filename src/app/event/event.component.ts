import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  message: string = '';
  onAddCart() {
    this.message = 'Product added in Cart';
  }
  onInputClick(event: any) {
    console.log(event.target.value);
  }

  onAddCart1(event:any){
   this.message=event.target.value+" added in cart"
  }
}
