import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { RemoveFavoriteComic, SetFavoriteComics } from './actions';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { FavoriteComicsStateModel } from './models';
@State<FavoriteComicsStateModel>({
  name: 'favoriteComics',
  defaults: {
    favoriteComics: [],
  },
})
@Injectable()
export class FavoriteComicsState {
  @Selector()
  static getFavoriteComics(state: FavoriteComicsStateModel) {
    return state.favoriteComics || [];
  }

  @Action(SetFavoriteComics)
  setFavoriteComics(
    { patchState }: StateContext<FavoriteComicsStateModel>,
    { payload }: SetFavoriteComics
  ) {
    console.log('payload', payload);
    patchState({
      favoriteComics: [...payload],
    });
  }

  @Action(RemoveFavoriteComic)
  removeFavoriteComic(
    { getState, patchState }: StateContext<FavoriteComicsStateModel>,
    { payload }: RemoveFavoriteComic
  ) {
    const state = getState();
    patchState({
      favoriteComics: state.favoriteComics.filter(
        (comic: ComicEntity) => (comic?.id ?? '') !== payload.id
      ),
    });
  }
}
