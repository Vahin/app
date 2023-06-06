import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
  user: UserSchema,
  loginForm?: LoginSchema,
}
