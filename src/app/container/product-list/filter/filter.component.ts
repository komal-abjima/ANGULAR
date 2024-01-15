import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock:number = 0;

  @Output()
  selectedFilterRadioButtonChnaged: EventEmitter<string> = new EventEmitter<string>();

  selectFilteredRadioButton: string = 'all';

  onFilteredRadioButtonChanged(){
    //console.log(this.selectFilteredRadioButton);
    console.log("selectedFilterRadioButtonChnaged has raised")
    this.selectedFilterRadioButtonChnaged.emit(this.selectFilteredRadioButton);
  }

}
