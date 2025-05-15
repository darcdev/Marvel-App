import { Injectable } from '@angular/core';
import { LogOutRequest } from '@app/core/models/auth';
import { AuthUserAdapter } from '@app/data/interfaces/IAuth-user-adapter';
import { UseCase } from '@app/domain/base/usecase';

@Injectable({
  providedIn: 'root',
})
export class LogOutUserCaseService implements UseCase<void, LogOutRequest> {
  constructor(private _authUserAdapter: AuthUserAdapter) {}

  async execute(): Promise<LogOutRequest> {
    return this._authUserAdapter.logout();
  }
}
