import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import getMarvelApiUrl from '@app/core/helpers/getMarvelApiUrl';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { ListAllComicsDTO } from '@app/data/dtos/comics/listAllComicsDTO';
import { paramsToString } from '@app/data/helpers/paramsToString';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { ListAllComicsMapperService } from '@app/data/mappers/comics/list-all-comics.mapper';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { ParamsRequest } from '@app/presentation/models/state/ParamsRequest';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicsRepositoryService extends IComicsRepository {
  nameTable = 'comics';

  constructor(
    private _httpClient: HttpClient,
    private _listAllComicsMapper: ListAllComicsMapperService
  ) {
    super();
  }

  getAllComics(params: ParamsRequest): Promise<BaseResponse<ComicEntity>> {
    console.log(getMarvelApiUrl('comics', paramsToString(params)));
    return firstValueFrom(
      this._httpClient.get<BaseResponse<ListAllComicsDTO>>(
        getMarvelApiUrl('comics', paramsToString(params))
      )
    ).then((response) => {
      return this._listAllComicsMapper.mapTo(response);
    });
  }
}
