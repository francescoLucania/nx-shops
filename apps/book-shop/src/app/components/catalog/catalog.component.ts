import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookCardComponent} from "../book-card/book-card.component";

@Component({
  selector: 'book-shop-catalog',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {

  @Input() public books: any[];

  constructor() {
  }
}
