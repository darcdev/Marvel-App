import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ListOfComicsComponent } from '../../shared/components/list-of-comics/list-of-comics.component';
import { GetFavoriteComicsUseCaseService } from '@app/domain/usecases/comics/get-favorite-comics';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { RemoveFavoriteComicUseCaseService } from '@app/domain/usecases/comics/remove-favorite-comic.service';
import { AuthSupabaseService } from '@app/core/services/supabase/auth-supabase.service.service';
import { UserProfileResponse } from '@app/core/models/auth';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FavoriteComicsState } from '@app/presentation/state/favorite-comics';
import {
  RemoveFavoriteComic,
  SetFavoriteComics,
} from '@app/presentation/state/favorite-comics/actions';
@Component({
  selector: 'app-user-dashboard',
  imports: [ListOfComicsComponent, PaginatorModule, Toast],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
  providers: [MessageService],
})
export class UserDashboardComponent {
  comics: ComicEntity[] = [];
  listOfComics$: Observable<ComicEntity[]>;
  user: UserProfileResponse | null = null;

  constructor(
    private _getFavoriteComicsService: GetFavoriteComicsUseCaseService,
    private _removeComicFromFavoritesService: RemoveFavoriteComicUseCaseService,
    private _authSupabaseService: AuthSupabaseService,
    private messageService: MessageService,
    private store: Store
  ) {
    this.listOfComics$ = this.store.select(
      FavoriteComicsState.getFavoriteComics
    );
  }

  ngOnInit(): void {
    this._authSupabaseService.getUser().then((user) => {
      this.user = user;
    });

    this.listOfComics$.subscribe((comics) => {
      console.log('comics', comics);
      this.comics = comics ?? [];
    });

    void this.loadFavoriteComics();
  }

  async loadFavoriteComics(): Promise<void> {
    try {
      const comics = await this._getFavoriteComicsService.execute();
      this.comics = comics.map((comic) => comic.data);
      this.store.dispatch(new SetFavoriteComics(this.comics));
    } catch (error) {
      console.log('Error al cargar los cómics favoritos', error);
    }
  }

  async onRemoveComicFromFavorites(comic: ComicEntity): Promise<void> {
    try {
      await this._removeComicFromFavoritesService.execute({
        ...comic,
        userId: this.user?.user.data.user?.id ?? '',
      });
      this.store.dispatch(new RemoveFavoriteComic(comic));
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Cómic eliminado de favoritos',
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Ha ocurrido un error al eliminar el cómic de favoritos',
      });
    }
  }
}
