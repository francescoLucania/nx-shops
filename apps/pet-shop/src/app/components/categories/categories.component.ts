import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularProductCardComponent} from "../card/popular-product-card.component";

@Component({
  selector: 'pet-shop-categories',
  standalone: true,
  imports: [CommonModule, PopularProductCardComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {}
