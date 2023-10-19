import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'book-shop-book-card',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() public bookInfo: any;
}
