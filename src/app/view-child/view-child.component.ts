import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('dob') DOB : ElementRef;
  @ViewChild('age') AGE : ElementRef;

  calculateAge(){

    let birthyear = new Date(this.DOB.nativeElement.value).getFullYear();
    let curryear = new Date().getFullYear();
    let age = curryear - birthyear;
    this.AGE.nativeElement.value = age;


  }

}
