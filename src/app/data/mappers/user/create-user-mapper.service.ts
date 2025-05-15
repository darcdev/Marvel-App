import { Injectable } from '@angular/core';
import { MapperFrom, MapperTo } from '@app/core/base/mappers';
import { UserDto } from '@app/data/dtos/user/UserDto';
import { UserEntity } from '@app/domain/entities/UserEntity';

@Injectable({
  providedIn: 'root',
})
export class CreateUserMapperService
  implements MapperFrom<UserEntity, UserDto>, MapperTo<UserDto, UserEntity>
{
  mapFrom(param: UserEntity): UserDto {
    return {
      email: param.email,
      name: param.name,
      identification: param.identification,
      userId: param.authUser,
    };
  }

  mapTo(param: UserDto): UserEntity {
    return {
      email: param.email,
      name: param.name,
      identification: param.identification,
      authUser: param.userId,
    };
  }
}
