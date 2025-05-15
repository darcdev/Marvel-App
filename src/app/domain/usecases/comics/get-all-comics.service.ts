import { Injectable } from '@angular/core';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { UseCase } from '@app/domain/base/usecase';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { ParamsRequest } from '@app/presentation/models/state/ParamsRequest';

@Injectable({
  providedIn: 'root',
})
export class GetAllComicsUseCaseService
  implements UseCase<ParamsRequest, BaseResponse<ComicEntity>>
{
  constructor(private _comicsRepository: IComicsRepository) {}

  execute(params: ParamsRequest): Promise<BaseResponse<ComicEntity>> {
    return this._comicsRepository.getAllComics(params);
  }
}
