import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { ThirdassignmentComponent } from './thirdassignment/thirdassignment.component';
import { CompDataComponent } from './comp-data/comp-data.component';
import { CockpitComponent } from './comp-data/cockpit/cockpit.component';
import { ServerElementComponent } from './comp-data/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    ServersComponent,
    ServerComponent,
    ThirdassignmentComponent,
    CompDataComponent,
    CockpitComponent,
    ServerElementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
