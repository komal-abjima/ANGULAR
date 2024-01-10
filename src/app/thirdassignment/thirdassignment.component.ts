import { Component } from '@angular/core';

@Component({
  selector: 'thirdassignment',
  templateUrl: './thirdassignment.component.html',
  styleUrl: './thirdassignment.component.css'
})
export class ThirdassignmentComponent {
  showSecret = false;
  log: number[] = [];

  onToggle(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
