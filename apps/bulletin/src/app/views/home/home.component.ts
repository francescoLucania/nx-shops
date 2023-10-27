import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularComponent} from "../../components/popular/popular.component";
import {CategoriesComponent} from "../../components/categories/categories.component";

@Component({
  selector: 'bulletin-home',
  standalone: true,
  imports: [CommonModule, CategoriesComponent, PopularComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
