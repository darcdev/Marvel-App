import { Provider } from '@angular/core';
import { CharacterInjectionFactory } from './character-injection-factory';
import { AuthInjectionFactory } from './auth-injection-factory';
import { UserInjectionFactory } from './user-injection-factory';
import { AuthUserSessionInjectionFactory } from './authUserSession-injection-factory';
import { ComicInjectionFactory } from './comic-injection-factory';

export const getAllProviders: Provider[] = [
  ...new CharacterInjectionFactory().createProviders(),
  ...new AuthInjectionFactory().createProviders(),
  ...new UserInjectionFactory().createProviders(),
  ...new AuthUserSessionInjectionFactory().createProviders(),
  ...new ComicInjectionFactory().createProviders(),
];
