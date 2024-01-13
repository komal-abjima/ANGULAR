import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-data',
  templateUrl: './comp-data.component.html',
  styleUrl: './comp-data.component.css'
})
export class CompDataComponent {
  serverElements = [{type: 'server', name: 'Test a server', content: 'Just a Test!'}];

}
