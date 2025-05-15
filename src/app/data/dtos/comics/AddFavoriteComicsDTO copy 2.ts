import { ComicsDto } from './ComicsDto';

export interface AddFavoriteComicsDTO extends ComicsDto {
  userId: string;
}
