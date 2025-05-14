import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-footer-comic-detail',
  imports: [ButtonModule],
  templateUrl: './footer-comic-detail.component.html',
  styleUrl: './footer-comic-detail.component.css',
})
export class FooterComicDetailComponent {
  constructor(public ref: DynamicDialogRef) {}

  closeDialog() {
    this.ref.close();
  }
}
