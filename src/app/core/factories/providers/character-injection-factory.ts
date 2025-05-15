import { Provider } from '@angular/core';
import { IInjectionFactory } from '@app/core/interfaces/factories/IInjection-factory';
import { ICharacterRepository } from '@app/data/interfaces/ICharacter.repository';

import { CharactersRepositoryService } from '@app/data/repositories/characters/characters-repository.service';

export class CharacterInjectionFactory implements IInjectionFactory {
  createProviders(): Provider[] {
    return [
      {
        provide: ICharacterRepository,
        useClass: CharactersRepositoryService,
      },
    ];
  }
}
