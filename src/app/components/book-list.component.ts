import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetail, BookSummary } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  constructor(
    private bookSvc: BookService,
    private activatedRoute: ActivatedRoute
  ) {}
  book!: BookDetail;
  books: BookSummary[] = [];
  bookId!: string;

  ngOnInit(): void {
    this.bookSvc
      .getBooks()
      .then((result) => {
        console.info('>>>books: ', result);
        this.books = result;
      })
      .catch((error) => {
        console.error('>>>>error:', error);
      });
  }

  // clicked(bookId: string) {
  //   this.bookId = this.activatedRoute.snapshot.params['bookId'];
  //   this.bookSvc
  //     .getBook(this.bookId)
  //     .then((result) => {
  //       console.info('>>>book: ', result);
  //       this.book = result;
  //     })
  //     .catch((error) => {
  //       console.error('>>>>error:', error);
  //     });
  // }
}
