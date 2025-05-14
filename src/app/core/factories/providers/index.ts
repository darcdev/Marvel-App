import { Provider } from '@angular/core';
import { CharacterInjectionFactory } from './character-injection-factory';

export const getAllProviders: Provider[] = [
  ...new CharacterInjectionFactory().createProviders(),
];
