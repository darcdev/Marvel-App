import { ComicsDto } from './ComicsDto';

export interface RemoveFavoriteComicDTO extends ComicsDto {
  userId: string;
}
