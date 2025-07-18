import { Component, OnInit } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { ListOfComicsComponent } from '../../shared/components/list-of-comics/list-of-comics.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { InputTextModule } from 'primeng/inputtext';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { GetAllComicsUseCaseService } from '@app/domain/usecases/comics/get-all-comics.service';
import { StatePagination } from '@app/presentation/models/state/Pagination';
import { AuthSupabaseService } from '@app/core/services/supabase/auth-supabase.service.service';
import { UserProfileResponse } from '@app/core/models/auth';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { AddComicToFavoriteUseCaseService } from '@app/domain/usecases/comics/add-comic-to-favorite.service copy';
import { StatesRequest } from '@app/presentation/constants/statesRequest';
import { LoaderRequestComponent } from '../../../theme/components/loader-request/loader-request.component';
import { MessageErrorComponent } from '../../../theme/components/messageError/messageError.component';
@Component({
  selector: 'app-discover',
  imports: [
    ListOfComicsComponent,
    PaginatorModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    FloatLabelModule,
    InputTextModule,
    NgIcon,
    Toast,
    LoaderRequestComponent,
    MessageErrorComponent,
  ],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
  providers: [MessageService],
})
export class DiscoverComponent implements OnInit {
  first: number = 0;
  rows: number = 10;
  value1: string = '';
  comics: ComicEntity[] = [];
  private searchTimeout: any = null;
  statusRequest: StatesRequest = StatesRequest.IDLE;
  StatesRequest = StatesRequest;

  pagination: StatePagination = {
    offset: 0,
    limit: 10,
    total: 0,
    count: 0,
  };
  user: UserProfileResponse | null = null;
  constructor(
    private _getAllComicsUseCase: GetAllComicsUseCaseService,
    private _addComicToFavoriteUseCase: AddComicToFavoriteUseCaseService,
    private _authService: AuthSupabaseService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this._authService.getUser().then((user) => {
      this.user = user;
    });

    void this.loadComics();
  }

  async loadComics(): Promise<void> {
    this.statusRequest = StatesRequest.LOADING;

    try {
      const comics = await this._getAllComicsUseCase.execute({
        offset: 0,
        limit: 10,
      });
      this.comics = comics.data.results;
      this.pagination = {
        offset: comics.data.offset,
        limit: comics.data.limit,
        total: comics.data.total,
        count: comics.data.count,
      };
      this.statusRequest = StatesRequest.SUCCESS;
    } catch (error) {
      this.statusRequest = StatesRequest.ERROR;
    }
  }

  async onPageChange(event: any): Promise<void> {
    this.statusRequest = StatesRequest.LOADING;
    try {
      const comics = await this._getAllComicsUseCase.execute({
        offset: event.first,
        limit: event.rows,
      });
      this.comics = comics.data.results;
      this.pagination = {
        offset: comics.data.offset,
        limit: comics.data.limit,
        total: comics.data.total,
        count: comics.data.count,
      };
      this.statusRequest = StatesRequest.SUCCESS;
    } catch (error) {
      this.statusRequest = StatesRequest.ERROR;
    }
  }

  onSearch(event: string): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    let params = {};

    if (event !== '') {
      params = {
        titleStartsWith: event,
        limit: this.pagination.limit,
      };
    } else {
      params = {
        limit: this.pagination.limit,
      };
    }

    this.searchTimeout = setTimeout(() => {
      this.statusRequest = StatesRequest.LOADING;
      this._getAllComicsUseCase
        .execute(params)
        .then((comics) => {
          this.comics = comics.data.results;
          this.pagination = {
            offset: comics.data.offset,
            limit: comics.data.limit,
            total: comics.data.total,
            count: comics.data.count,
          };
          this.statusRequest = StatesRequest.SUCCESS;
        })
        .catch((error) => {
          this.statusRequest = StatesRequest.ERROR;
        });
    }, 300);
  }

  async onAddToFavorites(comic: ComicEntity): Promise<void> {
    try {
      await this._addComicToFavoriteUseCase.execute({
        ...comic,
        userId: this.user?.user.data.user?.id ?? '',
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Cómic agregado a favoritos',
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail:
          error instanceof Error
            ? error.message
            : 'Ha ocurrido un error al agregar el cómic a favoritos',
      });
    }
  }
}
