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
  ],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
})
export class DiscoverComponent implements OnInit {
  first: number = 0;
  rows: number = 10;
  value1: string = '';
  comics: ComicEntity[] = [];
  private searchTimeout: any = null;

  pagination: StatePagination = {
    offset: 0,
    limit: 10,
    total: 0,
    count: 0,
  };

  constructor(private _getAllComicsUseCase: GetAllComicsUseCaseService) {}

  ngOnInit(): void {
    this._getAllComicsUseCase
      .execute({
        offset: 0,
        limit: 10,
      })
      .then((comics) => {
        this.comics = comics.data.results;
        this.pagination = {
          offset: comics.data.offset,
          limit: comics.data.limit,
          total: comics.data.total,
          count: comics.data.count,
        };
      });
  }

  onPageChange(event: any): void {
    this._getAllComicsUseCase
      .execute({
        offset: event.first,
        limit: event.rows,
      })
      .then((comics) => {
        this.comics = comics.data.results;
        this.pagination = {
          offset: comics.data.offset,
          limit: comics.data.limit,
          total: comics.data.total,
          count: comics.data.count,
        };
      });
  }

  onSearch(event: string): void {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.searchTimeout = setTimeout(() => {
      this._getAllComicsUseCase
        .execute({
          titleStartsWith: event,
          limit: this.pagination.limit,
        })
        .then((comics) => {
          this.comics = comics.data.results;
          this.pagination = {
            offset: comics.data.offset,
            limit: comics.data.limit,
            total: comics.data.total,
            count: comics.data.count,
          };
        });
    }, 300);
  }
}
