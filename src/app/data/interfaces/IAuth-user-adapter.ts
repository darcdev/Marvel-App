import { AuthResponse } from '@supabase/supabase-js';
import {
  LoginUserRequestDTO,
  RegisterUserRequestDTO,
} from '@app/core/models/dto/auth';
import { LogOutRequest } from '@app/core/models/auth';

export abstract class AuthUserAdapter {
  abstract simpleLogin(
    loginUserDto: LoginUserRequestDTO
  ): Promise<AuthResponse>;
  abstract register(
    registerUserDto: RegisterUserRequestDTO
  ): Promise<AuthResponse>;

  abstract logout(): Promise<LogOutRequest>;
}
