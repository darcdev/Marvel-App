import { Injectable } from '@angular/core';
import { MapperTo } from '@app/core/base/mappers';
import { ListAllCharactersDTO } from '@app/data/dtos/characters/listAllCharactersDTO';
import { CharacterEntity } from '@app/domain/entities/Character.entity';

@Injectable({
  providedIn: 'root',
})
export class ListAllCharacterMapperService
  implements MapperTo<CharacterEntity[], ListAllCharactersDTO[]>
{
  mapTo(param: ListAllCharactersDTO[]): CharacterEntity[] {
    return param.map((character) => ({
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
      comics: character.comics.available,
      series: character.series.available,
      events: character.events.available,
    }));
  }
}
