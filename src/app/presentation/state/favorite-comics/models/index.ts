import { ComicEntity } from '@app/domain/entities/Comic.entity';

export interface FavoriteComicsStateModel {
  favoriteComics: ComicEntity[];
}
