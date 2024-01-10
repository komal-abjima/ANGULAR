import { Component } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  Name:string =  '';
  allow: boolean = false;
  Message:string = '';

  onAddName(){
    this.Message = 'Your Name is ' + this.Name;
    
  }
  onReset(){
    this.Name = '';
    this.Message = '';
  }

  


}
