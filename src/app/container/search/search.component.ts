import { Component, EventEmitter, Output } from '@angular/core';

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

  // onSearchTextChanged(){
  //   this.searchTextChanged.emit(this.searchText);
  // }

  updateSearchText(inputEl: HTMLInputElement){
    // this.searchText = event.target.value;
    // console.log(inputEl.value);
    this.searchText = inputEl.value;
    this.searchTextChanged.emit(this.searchText);

  }



}
