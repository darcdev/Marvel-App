import { Injectable } from '@angular/core';
import { ListFavoriteComicsDTO } from '@app/data/dtos/comics/listFavoriteComicsDTO';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { UseCase } from '@app/domain/base/usecase';
import { ComicEntity } from '@app/domain/entities/Comic.entity';

@Injectable({
  providedIn: 'root',
})
export class GetFavoriteComicsUseCaseService
  implements UseCase<void, ListFavoriteComicsDTO[]>
{
  constructor(private _comicsRepository: IComicsRepository) {}

  execute(): Promise<ListFavoriteComicsDTO[]> {
    return this._comicsRepository.getFavorites();
  }
}
