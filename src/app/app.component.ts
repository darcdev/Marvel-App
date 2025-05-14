import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { appIcons } from './presentation/icons';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicDialogModule],
  template: ` <router-outlet></router-outlet> `,
  viewProviders: [provideIcons({ ...appIcons })],
})
export class AppComponent {
  title = 'marvel-app';
}
