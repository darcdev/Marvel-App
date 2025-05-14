import { CharacterEntity } from '@app/domain/entities/Character.entity';

export abstract class ICharacterRepository {
  abstract getCharacters(): Promise<CharacterEntity[]>;
}
