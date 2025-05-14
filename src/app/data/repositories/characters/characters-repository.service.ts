import { Injectable } from '@angular/core';
import { SupabaseService } from '@app/core/services/supabase/supabase.service';
import { CharactersOperationError } from '@app/core/validations/characters/listAllCharactersError';
import { ICharacterRepository } from '@app/data/interfaces/ICharacter.repository';
import { ListAllCharacterMapperService } from '@app/data/mappers/characters/list-all-characters.mapper';
import { CharacterEntity } from '@app/domain/entities/Character.entity';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepositoryService extends ICharacterRepository {
  nameTable = 'characters';

  constructor(
    private _supabaseService: SupabaseService,
    private _listAllCharacterMapper: ListAllCharacterMapperService
  ) {
    super();
  }

  async getCharacters(): Promise<CharacterEntity[]> {
    const { data, error: characterError } = await this._supabaseService.supabase
      .from(this.nameTable)
      .select();

    if (!data || characterError) {
      throw new CharactersOperationError(
        'listAllCharacters',
        'Error fetching all characters'
      );
    }
    return this._listAllCharacterMapper.mapTo(data);
  }
}
