import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User, UserSchema } from '../types/user';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';
import { updateFeatureFlags } from '../services/updateFeatureFlags';
import { FeatureFlags } from '@/shared/types/featureFlags';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveJsonSettings.fulfilled,
        (state, action: PayloadAction<JsonSettings>) => {
          if (state.authData) {
            state.authData.jsonSettings = action.payload;
          }
        },
      )
      .addCase(
        updateFeatureFlags.fulfilled,
        (state, action: PayloadAction<FeatureFlags>) => {
          if (state.authData) {
            state.authData.features = action.payload;
          }
        },
      )
      .addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
        state.authData = action.payload;
        state._inited = true;
      })
      .addCase(initAuthData.rejected, (state) => {
        state._inited = true;
      });
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
