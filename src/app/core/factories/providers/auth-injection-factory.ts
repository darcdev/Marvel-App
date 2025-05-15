import { Provider } from '@angular/core';
import { IInjectionFactory } from '@app/core/interfaces/factories/IInjection-factory';
import { AuthenticationService } from '@app/core/services/auth/authentication-service.service';
import { AuthUserAdapter } from '@app/data/interfaces/IAuth-user-adapter';

export class AuthInjectionFactory implements IInjectionFactory {
  createProviders(): Provider[] {
    return [
      {
        provide: AuthUserAdapter,
        useClass: AuthenticationService,
      },
    ];
  }
}
