import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AccountService]
})
export class AppComponent implements OnInit {
  title = 'dependency';
  accounts: {name: string, status: string}[] = [];
  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }




 

}
