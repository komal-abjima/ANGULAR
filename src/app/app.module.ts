import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './assignment-4/game-control/game-control.component';
import { OddComponent } from './assignment-4/odd/odd.component';
import { EvenComponent } from './assignment-4/even/even.component';
import { Pract1Component } from './Directive/pract1/pract1.component';
import { BasicHighlightDirective } from './Directive/pract1/basic-highlight/basic-highlight.directive';
import { BetterHighlightRendererDirective } from './Directive/pract1/better-highlight-renderer/better-highlight-renderer.directive';
import { UnlessDirective } from './Directive/pract1/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Pract1Component,
    BasicHighlightDirective,
    BetterHighlightRendererDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
