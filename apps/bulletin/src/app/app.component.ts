import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ModalModule} from "ngx-neo-ui";
import {FooterComponent} from "./components/footer/footer.component";
import {PromoComponent} from "./components/promo/promo.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, HttpClientModule, ModalModule, FooterComponent, PromoComponent],
  selector: 'bulletin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pet-shop';
}
