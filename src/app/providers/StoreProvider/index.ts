export type { AppDispatch } from 'app/providers/StoreProvider/consts/consts';
export type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkConfig,
} from './config/StateSchema';
export { createReduxStore } from './config/store';
export { StoreProvider } from './ui/StoreProvider';
