import { Injectable } from '@angular/core';

import { AuthUserAdapter } from '@app/data/interfaces/IAuth-user-adapter';
import {
  LoginUserRequestDTO,
  RegisterUserRequestDTO,
} from '@app/core/models/dto/auth';
import { AuthResponse } from '@supabase/supabase-js';
import { SupabaseService } from '../supabase/supabase.service';
import { UserRepositoryService } from '@app/data/repositories/user/user-repository.service';
import { LogOutRequest } from '@app/core/models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends AuthUserAdapter {
  constructor(
    private supabaseService: SupabaseService,
    private _userRepository: UserRepositoryService
  ) {
    super();
  }

  simpleLogin(loginUserDto: LoginUserRequestDTO): Promise<AuthResponse> {
    return this.supabaseService.supabase.auth.signInWithPassword({
      email: loginUserDto.email,
      password: loginUserDto.password,
    });
  }

  async register(
    registerUserDto: RegisterUserRequestDTO
  ): Promise<AuthResponse> {
    const authResponse: AuthResponse =
      await this.supabaseService.supabase.auth.signUp({
        email: registerUserDto.email,
        password: registerUserDto.password,
        options: {
          data: {
            full_name: registerUserDto.name,
          },
        },
      });

    if (!authResponse.data || authResponse.error) {
      throw new Error('Error creating user');
    } else {
      await this._userRepository.createUserProfile({
        authUser: authResponse.data.user!.id,
        email: authResponse.data.user!.email!,
        name: registerUserDto.name,
        identification: registerUserDto.identification,
      });
    }

    return authResponse;
  }

  logout(): Promise<LogOutRequest> {
    return this.supabaseService.supabase.auth.signOut();
  }
}
