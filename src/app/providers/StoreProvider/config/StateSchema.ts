import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';

import { UserSchema } from '@/entities/User';
import { ArticleDetailsCommentsSchema } from '@/features/ArticleDetailsComments';
import { LoginSchema } from '@/features/authByUsername';
import { addCommentFormSchema } from '@/entities/addCommentForm/model/types/addCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { ScrollSaverSchema } from '@/features/scrollSaver';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/editableProfileCard';

export interface StateSchema {
  user: UserSchema,
  scroll: ScrollSaverSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редюсеры
  loginForm?: LoginSchema,
  profile?: ProfileSchema,
  articleDetails?: ArticleDetailsSchema,
  articleDetailsComments?: ArticleDetailsCommentsSchema,
  addCommentForm?: addCommentFormSchema
  articlePage?: ArticlesPageSchema
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;

  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg
  state: StateSchema
}
