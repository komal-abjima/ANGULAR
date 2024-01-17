import { Component } from '@angular/core';
import { BookModel } from '../../book.model';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
selectedBook: BookModel;
showDetails(book: BookModel){
  this.selectedBook = book;
}
closeDetails(){
  this.selectedBook = null;
}
}
