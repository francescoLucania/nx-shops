import {Component, OnInit} from '@angular/core';
import {ButtonModule} from "ngx-neo-ui";
import {BooksService} from "../../services/books.service";
import {CatalogComponent} from "../../components/catalog/catalog.component";

@Component({
  standalone: true,
  imports: [ButtonModule, CatalogComponent],
  selector: 'book-shop-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{

  public popularBooks: any[];

  constructor(private booksService: BooksService) {}

  public ngOnInit(): void {
    this.booksService.getPopularBooks()
      .subscribe({
        next: (date) => {
          this.popularBooks = date;
        }
      })
  }
}
