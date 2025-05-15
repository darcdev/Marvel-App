import { Injectable } from '@angular/core';
import { LoginUserRequestDTO } from '@app/core/models/dto/auth';
import { AuthUserAdapter } from '@app/data/interfaces/IAuth-user-adapter';
import { UseCase } from '@app/domain/base/usecase';
import { AuthResponse } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SimpleUserLoginUseCaseService
  implements UseCase<LoginUserRequestDTO, AuthResponse>
{
  constructor(private _authUserAdapter: AuthUserAdapter) {}

  async execute(loginUserData: LoginUserRequestDTO): Promise<AuthResponse> {
    return this._authUserAdapter.simpleLogin(loginUserData);
  }
}
