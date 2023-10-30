import {Component, Input} from '@angular/core';
import {ButtonModule, ModalService} from "ngx-neo-ui";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'shops-lib-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule],
})

export class InfoModalComponent {
  @Input() public title: string;

  constructor(private modalService: ModalService) {}

  public closeModal(): void {
    this.modalService.close();
  }
}
