import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addCommentFormSchema } from '../types/addCommentForm';

const initialState: addCommentFormSchema = {
  text: '',
  error: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
