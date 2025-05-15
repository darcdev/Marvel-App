import { UserEntity } from '@app/domain/entities/UserEntity';
import { AuthError, Session, UserResponse } from '@supabase/supabase-js';

export interface LogOutRequest {
  error: AuthError | null;
}

export interface UserProfileResponse {
  profile: UserEntity;
  user: UserResponse;
}

export interface AuthSessionResponse {
  data: { session: Session | null };
}
