import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {PopularProductCardComponent} from "../card/popular-product-card.component";

@Component({
  selector: 'bulletin-popular',
  standalone: true,
  imports: [CommonModule, PopularProductCardComponent],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
})
export class PopularComponent implements OnInit {

  public popular: any[]

  constructor(private productService: ProductService) {
  }

  public ngOnInit(): void {
    this.productService.getPopular().subscribe({
      next: (data) => this.popular = data
    })
  }
}
