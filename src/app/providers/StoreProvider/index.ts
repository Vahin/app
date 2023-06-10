import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
};
