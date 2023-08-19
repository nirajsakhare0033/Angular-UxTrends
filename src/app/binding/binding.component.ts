import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
title:string=" Data binding";
show(){
  return "this is the method returning string and use in view"
}
condition:boolean=false;
}
