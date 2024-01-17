import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = "";

  //Output() first 
  //Create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // optional 2nd argument for the viewchild
  // 1. read: use it to read the different token from the queried element
  // 2. static : Determine when the query is resolved
      // true is when the view is initialized first  (by default it is true)
      // false when you want it to be resolved every time after change detection
      // {static: true/false}
  @ViewChild('inputSearchText') searchInputEl: ElementRef;

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }

  // inputEl: HTMLInputElement this is function argument
  updateSearchText(){        
    // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);

  }



}
