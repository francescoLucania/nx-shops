import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesComponent} from "../../components/categories/categories.component";
import {PopularComponent} from "../../components/popular/popular.component";

@Component({
  selector: 'pet-shop-home',
  standalone: true,
  imports: [CommonModule, CategoriesComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
