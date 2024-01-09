import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BottomMenuComponent } from './header/bottom-menu/bottom-menu.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { SearchComponent } from './product-list/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomMenuComponent,
    TopMenuComponent,
    ProductListComponent,
    TopHeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
