import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import defaultPreset from './presentation/theme/primeng/defaultPreset';
import { getAllProviders } from './core/factories/providers';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG({
      theme: {
        preset: defaultPreset,
        options: {
          prefix: 'primeng-theme',
          darkModeSelector: '.dark-theme',
        },
      },
    }),
    ...getAllProviders,
  ],
};
