import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule, InputModule} from "ngx-neo-ui";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'bulletin-promo',
  standalone: true,
  imports: [CommonModule, InputModule, ButtonModule, RouterModule],
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
})
export class PromoComponent {}
