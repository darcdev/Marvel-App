import { Provider } from '@angular/core';

export interface IInjectionFactory {
  createProviders(): Provider[];
}
