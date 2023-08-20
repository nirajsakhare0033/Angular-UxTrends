import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent {
  C: any;
  F: any;

  changed(value: any, type: any) {
    if (value) {
      if (type == 'C') {
        let feh = (value * 9) / 5 + 32;
        this.F = feh.toFixed(1);
      } else {
        let cel = (value - 32) * (5 / 9);
        this.C = cel.toFixed(1);
      }
    }
  }
}
