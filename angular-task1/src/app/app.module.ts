import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { AddBtnComponent } from './table/add-btn/add-btn.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './table/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    AddBtnComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
