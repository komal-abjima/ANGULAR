import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dependency';
  accounts = [
      {
        name: 'Master Account',
        status: 'Active'
      },
      {
        name: 'Testaccount',
        status:'inactive'
      },
      {
        name:'Hidden Account',
        status:'unknown'

      }

  ];
  onAccountAdded(newAccount: {name: string, status: string}){
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus ;
  }

}
