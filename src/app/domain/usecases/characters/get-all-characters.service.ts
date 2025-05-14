import { Injectable } from '@angular/core';
import { ICharacterRepository } from '@app/data/interfaces/ICharacter.repository';
import { UseCase } from '@app/domain/base/usecase';
import { CharacterEntity } from '@app/domain/entities/Character.entity';

@Injectable({
  providedIn: 'root',
})
export class GetAllCharactersUseCaseService
  implements UseCase<string, CharacterEntity[]>
{
  constructor(private _characterRepository: ICharacterRepository) {}

  execute(): Promise<CharacterEntity[]> {
    return this._characterRepository.getCharacters();
  }
}
