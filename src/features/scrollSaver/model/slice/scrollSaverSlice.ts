import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollSaverSchema } from '../types/ScrollSaverSchema';

const initialState: ScrollSaverSchema = {
  records: {},
};

export const scrollSaverSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
      state.records[payload.path] = payload.position;
    },
  },
});

export const {
  actions: scrollSaverActions,
  reducer: scrollSaverReducer,
} = scrollSaverSlice;
