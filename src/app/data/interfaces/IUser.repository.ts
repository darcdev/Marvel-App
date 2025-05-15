import { UserEntity } from '@app/domain/entities/UserEntity';

export abstract class IUserRepository {
  abstract getUserProfile(userId: string): Promise<UserEntity | null>;
  abstract createUserProfile(profile: UserEntity): Promise<UserEntity>;
}
