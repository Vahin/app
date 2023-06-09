import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUsername';

export interface StateSchema {
  user: UserSchema,

  // Асинхронные редюсеры
  loginForm?: LoginSchema,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;

  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;

  add: (key: StateSchemaKey, reducer: Reducer) => void;

  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}
