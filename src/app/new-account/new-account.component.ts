import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  onCreateAcoount(accountName: string, accountStatus: string){
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed: ' +accountStatus);
  }
}
