import { Injectable } from '@angular/core';
import { IAuthUserSession } from '@app/core/interfaces/auth/IAuth-user-session';
import { SupabaseService } from './supabase.service';
import { UserRepositoryService } from '@app/data/repositories/user/user-repository.service';
import {
  AuthSessionResponse,
  UserProfileResponse,
} from '@app/core/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthSupabaseService extends IAuthUserSession {
  constructor(
    private supabaseService: SupabaseService,
    private _userRepository: UserRepositoryService
  ) {
    super();
  }

  async getUser(): Promise<UserProfileResponse> {
    const user = await this.supabaseService.supabase.auth.getUser();
    if (!user) {
      throw new Error('User not authenticated');
    }
    const userProfile = await this._userRepository.getUserProfile(
      user?.data?.user?.id ?? ''
    );
    if (!userProfile) {
      throw new Error('User profile not found');
    }
    return {
      profile: userProfile,
      user: user,
    };
  }

  public getSession(): Promise<AuthSessionResponse | null> {
    return this.supabaseService.supabase.auth.getSession();
  }
}
