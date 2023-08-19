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
  onRemoveUser1(item:any) {
    this.users.splice(item, 1);
  }
}
