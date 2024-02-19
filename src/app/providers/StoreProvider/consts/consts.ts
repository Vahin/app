import { createReduxStore } from '../config/store';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
