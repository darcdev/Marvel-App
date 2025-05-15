import { ComicsDto } from './ComicsDto';

export interface ListFavoriteComicsDTO {
  id: string;
  userId: string;
  data: ComicsDto;
  idComic: number;
}
