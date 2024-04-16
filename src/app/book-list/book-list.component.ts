import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-book-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './book-list.component.html',
    styleUrl: './book-list.component.scss'
})
export class BookListComponent
{
    books$: Observable<any>;

    constructor(private bookData: BookDataService)
    {
        this.books$ = this.bookData.getBooks();
    }
}
