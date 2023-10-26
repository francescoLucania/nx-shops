import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopularComponent} from "../../components/popular/popular.component";

@Component({
  selector: 'bulletin-home',
  standalone: true,
  imports: [CommonModule, PopularComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
