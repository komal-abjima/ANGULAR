import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated =  new EventEmitter<{serverName: string, serverContent: string }>();
 
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  onAddServer(InputElement: HTMLInputElement){
    // console.log(InputElement.value);
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: InputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });

  }
  onAddBlueprint(InputElement: HTMLInputElement){
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: InputElement.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}


