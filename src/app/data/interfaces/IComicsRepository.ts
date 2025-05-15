import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { ParamsRequest } from '@app/presentation/models/state/ParamsRequest';

export abstract class IComicsRepository {
  abstract getAllComics(
    params: ParamsRequest
  ): Promise<BaseResponse<ComicEntity>>;
}
