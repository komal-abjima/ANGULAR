import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { Child1Component } from './encapsulation/child1/child1.component';
import { Child2Component } from './encapsulation/child2/child2.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { ViewChildComponent } from './view-child/view-child.component';


@NgModule({
  declarations: [
    AppComponent,
    EncapsulationComponent,
    Child1Component,
    Child2Component,
    TemplateReferenceVariableComponent,
    ViewChildComponent,
 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
