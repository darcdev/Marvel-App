import { Injectable } from '@angular/core';
import { RegisterUserRequestDTO } from '@app/core/models/dto/auth';
import { AuthUserAdapter } from '@app/data/interfaces/IAuth-user-adapter';
import { UseCase } from '@app/domain/base/usecase';
import { AuthResponse } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class CreateSimpleAccountUserUseCaseService
  implements UseCase<RegisterUserRequestDTO, AuthResponse>
{
  constructor(private authUserAdapter: AuthUserAdapter) {}

  async execute(
    registerUserData: RegisterUserRequestDTO
  ): Promise<AuthResponse> {
    return this.authUserAdapter.register(registerUserData);
  }
}
