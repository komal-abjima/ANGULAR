import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookModel } from '../../book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input()
  book: BookModel;

  @Output() bookClicked = new EventEmitter<BookModel>();

  onBookClick(){
    this.bookClicked.emit(this.book);

  }

  

  

}
