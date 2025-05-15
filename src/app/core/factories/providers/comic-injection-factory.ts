import { Provider } from '@angular/core';
import { IInjectionFactory } from '@app/core/interfaces/factories/IInjection-factory';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';

import { ComicsRepositoryService } from '@app/data/repositories/comics/comics-repository.service';

export class ComicInjectionFactory implements IInjectionFactory {
  createProviders(): Provider[] {
    return [
      {
        provide: IComicsRepository,
        useClass: ComicsRepositoryService,
      },
    ];
  }
}
