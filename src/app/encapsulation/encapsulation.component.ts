import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrl: './encapsulation.component.css',
  // it will apply all components same button css which is declared in parent component css
  // encapsulation: ViewEncapsulation.None
})
export class EncapsulationComponent {

}
