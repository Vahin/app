import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { ArticleDetailsCommentsSchema } from 'features/ArticleDetailsComments';
import { LoginSchema } from 'features/authByUsername';
import { NavigateOptions, To } from 'react-router-dom';
import { addCommentFormSchema } from 'features/addCommentForm/model/types/addCommentForm';

export interface StateSchema {
  user: UserSchema,

  // Асинхронные редюсеры
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addCommentForm?: addCommentFormSchema
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

interface ThunkExtraArg {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
  state: StateSchema
}
