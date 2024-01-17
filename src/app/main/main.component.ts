import { Component, ViewChild } from '@angular/core';
import { BookModel } from '../book.model';
import { BookDetailsComponent } from './book-details/book-details.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @ViewChild(BookDetailsComponent) bookDetailsComponent: BookDetailsComponent;
  
  onBookClick(book: BookModel){
    this.bookDetailsComponent.showDetails(book);

  }

  books: BookModel[] = [
    {
      id: 1,
      name: 'Cloud Computing:Concepts,Technology And Architecture',
      auth_name: 'ERIC ROBERTSON',
      price: 599,
      imgUrl: 'https://covers.openlibrary.org/b/id/13210382-M.jpg',
      marketPP: 700,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 2,
      name: 'JEAN PLADDY - THE GOLDSMITHS WIFE',
      auth_name: 'ELEANOR ALICE',
      price: 699,
      imgUrl: 'https://covers.openlibrary.org/b/id/2385601-M.jpg',
      marketPP: 800,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 3,
      name: 'Harry Potter ve Ateş Kadehi',
      auth_name: 'J. K. Rowling',
      price: 599,
      imgUrl: 'https://covers.openlibrary.org/b/id/12059372-M.jpg',
      marketPP: 700,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 4,
      name: 'The lost trumpet',
      auth_name: 'JAMES',
      price: 599,
      imgUrl: 'https://covers.openlibrary.org/b/id/489299-M.jpg',
      marketPP: 700,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 5,
      name: 'PIONEERS',
      auth_name: 'ROBERTSON',
      price: 599,
      imgUrl: 'https://covers.openlibrary.org/w/id/7887626-M.jpg',
      marketPP: 700,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 6,
      name: 'JAVASCRIPT-THE GOOD PARTS',
      auth_name: 'JOHN KETTY',
      price: 700,
      imgUrl: 'https://covers.openlibrary.org/w/id/9245523-M.jpg',
      marketPP: 900,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 7,
      name: 'THE INCREDIBLE JOURNEY',
      auth_name: 'PETER',
      price: 599,
      imgUrl: 'https://covers.openlibrary.org/w/id/14539398-M.jpg',
      marketPP: 700,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 8,
      name: 'LECONARS AMORSAS',
      auth_name: 'JOHN',
      price: 800,
      imgUrl: 'https://covers.openlibrary.org/w/id/8084564-M.jpg',
      marketPP: 1000,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 9,
      name: 'JOHN\'S QUEST',
      auth_name: 'ERIC ROBERTSON',
      price: 1000,
      imgUrl: 'https://covers.openlibrary.org/w/id/5827367-M.jpg',
      marketPP: 1200,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 10,
      name: 'STEP & THORNY WAY',
      auth_name: 'PETERSON',
      price: 299,
      imgUrl: 'https://covers.openlibrary.org/w/id/10104733-M.jpg',
      marketPP: 400,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
    },
    {
      id: 11,
      name: 'CLIVE CUSLER',
      auth_name: 'ERIC',
      price: 399,
      imgUrl: 'https://covers.openlibrary.org/w/id/9269384-M.jpg',
      marketPP: 500,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
      },
      {
        id: 12,
        name: 'THE BAGHMAN BOOKS',
        auth_name: 'STEPHEN',
        price: 799,
        imgUrl: 'https://covers.openlibrary.org/w/id/8565607-M.jpg',
        marketPP: 900,
      description: 'Cloud Computing: Concepts, Technology and Architecture is the result of years of research and analysis of the commercial cloud computing industry, cloud computing vendor platforms and further innovation and contributions made by cloud computing industry standards organizations and practitioners. This book breaks down proven and mature cloud computing technologies and practices into a series of well-defined concepts, models and technology mechanisms. In doing so, the book establishes concrete, academic coverage of fundamental aspects of cloud computing concepts and technologies, carefully described to ensure full alignment with the cloud computing industry.'
        }
  ]

}
