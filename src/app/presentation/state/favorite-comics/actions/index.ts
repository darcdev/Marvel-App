import { ComicEntity } from '@app/domain/entities/Comic.entity';

export class RemoveFavoriteComic {
  static readonly type = '[Favorite Comic] Remove Favorite Comic';
  constructor(public payload: ComicEntity) {}
}

export class SetFavoriteComics {
  static readonly type = '[Favorite Comic] Set Favorite Comics';
  constructor(public payload: ComicEntity[]) {}
}
