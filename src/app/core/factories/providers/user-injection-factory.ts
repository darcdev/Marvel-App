import { Provider } from '@angular/core';
import { IInjectionFactory } from '@app/core/interfaces/factories/IInjection-factory';
import { IUserRepository } from '@app/data/interfaces/IUser.repository';
import { UserRepositoryService } from '@app/data/repositories/user/user-repository.service';

export class UserInjectionFactory implements IInjectionFactory {
  createProviders(): Provider[] {
    return [
      {
        provide: IUserRepository,
        useClass: UserRepositoryService,
      },
    ];
  }
}
