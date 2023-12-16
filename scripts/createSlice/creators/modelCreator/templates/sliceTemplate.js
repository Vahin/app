module.exports = ({ componentName, sliceName }) => `import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ${componentName}Schema } from '../types/${componentName}Schema';

/* const ${sliceName}Adapter = createEntityAdapter<>({
  selectId: (entity) => entity.id,
});

export const get${componentName} = ${sliceName}Adapter.getSelectors<StateSchema>(
  (state) => state.${sliceName} || ${sliceName}Adapter.getInitialState(),
); */

const initialState: ${componentName}Schema = {
  isLoading: false,
  error: undefined,
};

const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
  /* initialState: ${sliceName}Adapter.getInitialState<${componentName}Schema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }), */
  initialState,
  reducers: {},
  /* extraReducers: (builder) => builder
    .addCase(asyncThunk.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, action: PayloadAction<CommentType[]>) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    })
    .addCase(asyncThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }), */
});

export const {
  reducer: ${sliceName}Reducer,
  actions: ${sliceName}Actions,
} = ${sliceName}Slice;`;
