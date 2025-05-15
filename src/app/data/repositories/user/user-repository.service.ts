import { Injectable } from '@angular/core';
import { SupabaseService } from '@app/core/services/supabase/supabase.service';
import { UserDto } from '@app/data/dtos/user/UserDto';
import { IUserRepository } from '@app/data/interfaces/IUser.repository';
import { CreateUserMapperService } from '@app/data/mappers/user/create-user-mapper.service';
import { UserEntity } from '@app/domain/entities/UserEntity';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryService extends IUserRepository {
  constructor(
    private supabaseService: SupabaseService,
    private createUserMapper: CreateUserMapperService
  ) {
    super();
  }

  async getUserProfile(userId: string): Promise<UserEntity | null> {
    const { data, error } = await this.supabaseService.supabase
      .from('profiles')
      .select('*')
      .eq('userId', userId)
      .single<UserDto>();

    if (error || !data) {
      return null;
    }

    return this.createUserMapper.mapTo(data);
  }

  async createUserProfile(userProfile: UserEntity): Promise<UserEntity> {
    const userDto = this.createUserMapper.mapFrom(userProfile);

    const { data, error } = await this.supabaseService.supabase
      .from('profiles')
      .insert(userDto)
      .select()
      .single<UserDto>();

    if (error) {
      throw new Error('Error creating profile');
    }

    return this.createUserMapper.mapTo(data);
  }
}
