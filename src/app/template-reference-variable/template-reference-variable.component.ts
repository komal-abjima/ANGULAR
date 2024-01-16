import { Component, ElementRef, ViewChild } from '@angular/core';
import { BookDetails } from './bookdetails.model';

@Component({
  selector: 'template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {
  id: number;
 @ViewChild('bookname') bookname: ElementRef;

  BookDetails: BookDetails[] = [
    new BookDetails(1, 'Court of misteru', 'Mark', 2000),
    new BookDetails(2, 'Pie', 'Jesus', 1999),
    
  ];


 addDetails(name: string, authorname: string, price: string ){
  if(name && authorname && price){
    this.BookDetails.push({
      id: this.BookDetails.length + 1,
      name: name,
      authorname: authorname,
      price: parseFloat(price)
    });
    
  }
}
 

 }

