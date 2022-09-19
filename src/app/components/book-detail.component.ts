import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetail } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookSvc:BookService,private activatedRoute: ActivatedRoute) { }

  book!: BookDetail;
  bookId!: string;

  ngOnInit(): void {
  
    this.bookId = this.activatedRoute.snapshot.params['bookId']
    this.bookSvc.getBook(this.bookId)
    .then((result) => {
      console.info('>>>book: ', result);
      this.book=result;
    })
    .catch((error) => {
      console.error('>>>>error:', error);
    });
  }

}
