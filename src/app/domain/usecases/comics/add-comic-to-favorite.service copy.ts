import { Injectable } from '@angular/core';
import { AddFavoriteComicsDTO } from '@app/data/dtos/comics/AddFavoriteComicsDTO copy 2';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { UseCase } from '@app/domain/base/usecase';

@Injectable({
  providedIn: 'root',
})
export class AddComicToFavoriteUseCaseService
  implements UseCase<AddFavoriteComicsDTO, void>
{
  constructor(private _comicsRepository: IComicsRepository) {}

  execute(params: AddFavoriteComicsDTO): Promise<void> {
    return this._comicsRepository.addComicToFavorites(params);
  }
}
