import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-marvel-fans',
  imports: [CommonModule],
  templateUrl: './logo-marvel-fans.component.html',
  styleUrl: './logo-marvel-fans.component.css',
})
export class LogoMarvelFansComponent {
  @Input({ required: false }) textColor: string = 'var(--color-white)';
}
