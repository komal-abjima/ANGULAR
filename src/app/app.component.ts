import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-code';
  fullname: string = '';

  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;

  submit(){
    let name = '';
    this.inputElements.forEach((el)=>{
      name += el.nativeElement.value + ' ';
    })
    this.fullname = name.trim();

  }
}
