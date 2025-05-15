import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import getMarvelApiUrl from '@app/core/helpers/getMarvelApiUrl';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { ListAllCharactersDTO } from '@app/data/dtos/characters/listAllCharactersDTO';
import { ICharacterRepository } from '@app/data/interfaces/ICharacter.repository';
import { ListAllCharacterMapperService } from '@app/data/mappers/characters/list-all-characters.mapper';
import { CharacterEntity } from '@app/domain/entities/Character.entity';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersRepositoryService extends ICharacterRepository {
  nameTable = 'characters';

  constructor(
    private _listAllCharacterMapper: ListAllCharacterMapperService,
    private _httpClient: HttpClient
  ) {
    super();
  }

  getCharacters(): Promise<CharacterEntity[]> {
    return firstValueFrom(
      this._httpClient.get<BaseResponse<ListAllCharactersDTO>>(
        getMarvelApiUrl('characters')
      )
    ).then((response) => {
      return this._listAllCharacterMapper.mapTo(response.data.results);
    });
  }
}
