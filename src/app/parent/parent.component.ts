import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  productselected: boolean = false;
  selectedprod: string;

  alertShow: any;

  onselectproduct(product) {
    this.productselected = true;
    this.selectedprod = product;
  }
  alertShowBtn(){
    this.alertShow=this.selectedprod
  }
}
