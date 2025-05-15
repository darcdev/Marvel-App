import { Injectable } from '@angular/core';
import { RemoveFavoriteComicDTO } from '@app/data/dtos/comics/RemoveFavoriteComicDTO';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { UseCase } from '@app/domain/base/usecase';
import { ComicEntity } from '@app/domain/entities/Comic.entity';

@Injectable({
  providedIn: 'root',
})
export class RemoveFavoriteComicUseCaseService
  implements UseCase<ComicEntity, void>
{
  constructor(private _comicsRepository: IComicsRepository) {}

  execute(comic: RemoveFavoriteComicDTO): Promise<void> {
    return this._comicsRepository.removeComicFromFavorites(comic);
  }
}
