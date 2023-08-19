import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent {
  users = [];
  onCreateUser(box: any) {
    this.users.push({ name: box.value });
  }
  onRemoveUser1(i:any) {
    this.users.splice(i, 1);
  }
}
