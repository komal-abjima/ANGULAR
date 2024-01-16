import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  // here i am using shadowDom which encapsulated the globally button css and remove the css from this child component
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child1Component {

}
