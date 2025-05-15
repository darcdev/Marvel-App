import { Provider } from '@angular/core';
import { IAuthUserSession } from '@app/core/interfaces/auth/IAuth-user-session';
import { IInjectionFactory } from '@app/core/interfaces/factories/IInjection-factory';
import { AuthSupabaseService } from '@app/core/services/supabase/auth-supabase.service.service';

export class AuthUserSessionInjectionFactory implements IInjectionFactory {
  createProviders(): Provider[] {
    return [
      {
        provide: IAuthUserSession,
        useClass: AuthSupabaseService,
      },
    ];
  }
}
