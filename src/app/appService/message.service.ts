import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  msgbtnaleart() {
    alert('this is service method use in component......🎆🎆🎈🧧✨😊💕👌🤷‍♂️🤷‍♀️');
  }
  //product:string="Service Variable mobile";

  product = {
    name: "mobile",
    id: 1,
  };
}
