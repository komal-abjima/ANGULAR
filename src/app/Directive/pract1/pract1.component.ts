import { Component } from '@angular/core';

@Component({
  selector: 'app-pract1',
  templateUrl: './pract1.component.html',
  styleUrl: './pract1.component.css'
})
export class Pract1Component {
  // numbers = [1,2,3,4,5];
  oddNumbers = [1,3,5];
  evenNumbers = [2,4];
  onlyOdd = false;

}
