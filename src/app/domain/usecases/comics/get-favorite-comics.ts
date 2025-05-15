import { Injectable } from '@angular/core';
import { ListFavoriteComicsDTO } from '@app/data/dtos/comics/listFavoriteComicsDTO';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { UseCase } from '@app/domain/base/usecase';
import { GetAllFavoriteComicsParams } from '@app/data/models/params/comic.params';
@Injectable({
  providedIn: 'root',
})
export class GetFavoriteComicsUseCaseService
  implements UseCase<GetAllFavoriteComicsParams, ListFavoriteComicsDTO[]>
{
  constructor(private _comicsRepository: IComicsRepository) {}

  execute(
    params: GetAllFavoriteComicsParams
  ): Promise<ListFavoriteComicsDTO[]> {
    return this._comicsRepository.getFavorites(params);
  }
}
