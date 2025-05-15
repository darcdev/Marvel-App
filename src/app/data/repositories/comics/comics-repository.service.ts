import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import getMarvelApiUrl from '@app/core/helpers/getMarvelApiUrl';
import { BaseResponse } from '@app/core/interfaces/marvelResponses/baseResponses';
import { SupabaseService } from '@app/core/services/supabase/supabase.service';
import { ListFavoriteComicsDTO } from '@app/data/dtos/comics/listFavoriteComicsDTO';
import { ListAllComicsDTO } from '@app/data/dtos/comics/listAllComicsDTO';
import { paramsToString } from '@app/data/helpers/paramsToString';
import { IComicsRepository } from '@app/data/interfaces/IComicsRepository';
import { ListAllComicsMapperService } from '@app/data/mappers/comics/list-all-comics.mapper';
import { ComicEntity } from '@app/domain/entities/Comic.entity';
import { ParamsRequest } from '@app/presentation/models/state/ParamsRequest';
import { firstValueFrom } from 'rxjs';
import { AddFavoriteComicsDTO } from '@app/data/dtos/comics/AddFavoriteComicsDTO copy 2';
import { RemoveFavoriteComicDTO } from '@app/data/dtos/comics/RemoveFavoriteComicDTO';

@Injectable({
  providedIn: 'root',
})
export class ComicsRepositoryService extends IComicsRepository {
  nameTable = 'favorite-comics';

  constructor(
    private _httpClient: HttpClient,
    private _listAllComicsMapper: ListAllComicsMapperService,
    private supabaseService: SupabaseService
  ) {
    super();
  }

  getAllComics(params: ParamsRequest): Promise<BaseResponse<ComicEntity>> {
    return firstValueFrom(
      this._httpClient.get<BaseResponse<ListAllComicsDTO>>(
        getMarvelApiUrl('comics', paramsToString(params))
      )
    ).then((response) => {
      return this._listAllComicsMapper.mapTo(response);
    });
  }
  async addComicToFavorites(comic: AddFavoriteComicsDTO) {
    const { data, error } = await this.supabaseService.supabase
      .from(this.nameTable)
      .insert({
        idComic: comic.id,
        userId: comic.userId,
        data: comic,
      });
    if (error) {
      if (error.code === '23505') {
        throw new Error('El cómic ya está en favoritos');
      }
      throw new Error('Ha ocurrido un error al agregar el cómic a favoritos');
    }
  }
  async removeComicFromFavorites(comic: RemoveFavoriteComicDTO) {
    const { data, error } = await this.supabaseService.supabase
      .from(this.nameTable)
      .delete()
      .eq('idComic', comic.id)
      .eq('userId', comic.userId);

    if (error) {
      throw new Error('Ha ocurrido un error al eliminar el cómic de favoritos');
    }
  }
  async getFavorites(): Promise<ListFavoriteComicsDTO[]> {
    const { data, error } = await this.supabaseService.supabase
      .from(this.nameTable)
      .select('*');
    if (error) {
      throw new Error('Error al obtener los cómics favoritos');
    }
    return data;
  }
}
