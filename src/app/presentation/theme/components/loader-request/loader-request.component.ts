import { Component, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader-request',
  imports: [ProgressSpinnerModule],
  templateUrl: './loader-request.component.html',
  styleUrl: './loader-request.component.css',
})
export class LoaderRequestComponent {
  message = input<string>();
}
