import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-data',
  templateUrl: './comp-data.component.html',
  styleUrl: './comp-data.component.css'
})
export class CompDataComponent {
  // input() decorator
  serverElements = [{type: 'server', name: 'Test a server', content: 'Just a Test!'}];

// Output() decorator
  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }
  onBlueprintAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type:'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }


}
