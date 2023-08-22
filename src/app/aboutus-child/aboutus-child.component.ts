import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-aboutus-child',
  templateUrl: './aboutus-child.component.html',
  styleUrls: ['./aboutus-child.component.css'],
})
export class AboutusChildComponent implements OnInit, OnChanges {
  @Input() myValue: string = 'niraj sakhare';
  constructor() {
    //console.log("constructor called")
    //alert("constructor call")
  }
  //ngOnChanges uses interface
  ngOnChanges(changes: SimpleChanges) {
    // console.log("ngOnChange Called")
    //alert('ngOnChange call');
    console.log(changes);
  }

  ngOnInit() {
    //console.log("ngOnInit called");
    //alert('ngOnInit call');
  }
}
