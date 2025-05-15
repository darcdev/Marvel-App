import {
  AuthSessionResponse,
  UserProfileResponse,
} from '@app/core/models/auth';

export abstract class IAuthUserSession {
  abstract getUser(): Promise<UserProfileResponse>;
  abstract getSession(): Promise<AuthSessionResponse | null>;
}
