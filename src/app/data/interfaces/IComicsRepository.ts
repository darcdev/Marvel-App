import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { ParamsRequest } from '@app/presentation/models/state/ParamsRequest';
import { ListFavoriteComicsDTO } from '../dtos/comics/listFavoriteComicsDTO';
import { RemoveFavoriteComicDTO } from '../dtos/comics/RemoveFavoriteComicDTO';

export abstract class IComicsRepository {
  abstract getAllComics(
    params: ParamsRequest
  ): Promise<BaseResponse<ComicEntity>>;
  abstract addComicToFavorites(comic: ComicEntity): Promise<void>;
  abstract removeComicFromFavorites(
    comic: RemoveFavoriteComicDTO
  ): Promise<void>;
  abstract getFavorites(): Promise<ListFavoriteComicsDTO[]>;
}
