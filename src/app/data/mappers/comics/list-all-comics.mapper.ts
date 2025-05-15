import { Injectable } from '@angular/core';
import { MapperTo } from '@app/core/base/mappers';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { ListAllComicsDTO } from '@app/data/dtos/comics/listAllComicsDTO';
import { ComicEntity } from '@app/domain/entities/Comic.entity';

@Injectable({
  providedIn: 'root',
})
export class ListAllComicsMapperService
  implements
    MapperTo<BaseResponse<ComicEntity>, BaseResponse<ListAllComicsDTO>>
{
  mapTo(param: BaseResponse<ListAllComicsDTO>): BaseResponse<ComicEntity> {
    return {
      code: param.code,
      data: {
        ...param.data,
        results: param.data.results.map((comic) => ({
          id: comic.id,
          title: comic.title,
          description: comic.description,
          issueNumber: comic.issueNumber,
          pageCount: comic.pageCount,
          prices: comic.prices,
          thumbnail: comic.thumbnail,
          series: comic.series,
          dates: comic.dates,
          creators: comic.creators,
        })),
      },
    };
  }
}
