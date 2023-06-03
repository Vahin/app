import { counterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: counterSchema,
  user: UserSchema
}
