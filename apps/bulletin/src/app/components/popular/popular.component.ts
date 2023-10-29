import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "../../services/product.service";
import {PopularProductCardComponent} from "../card/popular-product-card.component";
import {DestroyService} from "@nx-shops/lib";
import {takeUntil} from "rxjs";

@Component({
  selector: 'bulletin-popular',
  standalone: true,
  imports: [CommonModule, PopularProductCardComponent],
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss'],
  providers: [DestroyService],
})
export class PopularComponent implements OnInit {

  public popular: any[]

  constructor(private productService: ProductService, private destroy$: DestroyService) {
  }

  public ngOnInit(): void {
    this.productService.getPopular()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => this.popular = data
      })
  }
}
