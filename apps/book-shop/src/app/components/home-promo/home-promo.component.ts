import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'book-shop-home-promo',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './home-promo.component.html',
  styleUrls: ['./home-promo.component.scss'],
})
export class HomePromoComponent implements OnInit {

  public ngOnInit(): void {
    const scrollContainer = (document as any).querySelector(".promo__container");
    const scrollContent = (document as any).querySelector(".promo__content");
    scrollContainer?.addEventListener("wheel", (evt: any) => {
      (scrollContainer as any).scrollLeft += evt.deltaY;
    });

  }
}
