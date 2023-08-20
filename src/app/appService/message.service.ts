import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  msgbtnaleart() {
    alert('this is service method use in component......🎆🎆🎈🧧✨😊💕👌🤷‍♂️🤷‍♀️');
  }
  //product:string="Service Variable mobile";

  // product = {
  //   name: "mobile",
  //   id: 1,
  // };

  product(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
