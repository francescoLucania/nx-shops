import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "ngx-neo-ui";

@Component({
  selector: 'pet-shop-card',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './popular-product-card.component.html',
  styleUrls: ['./popular-product-card.component.scss'],
})
export class PopularProductCardComponent {
  @Input() public product: any;
}
