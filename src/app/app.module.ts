import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { FormsModule } from '@angular/forms';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UserService } from './users.service';
import { CounterService } from './counter.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
 
  providers: [AccountService, LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
