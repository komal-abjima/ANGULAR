import { Component } from '@angular/core';

@Component({
  selector: 'bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrl: './bottom-menu.component.css'
})
export class BottomMenuComponent {
  bottomMenuItem: string[] = ['Home', 'Products', 'About', 'Services', 'Contact Us']

}
