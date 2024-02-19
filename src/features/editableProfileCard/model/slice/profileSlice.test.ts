import { Profile } from '@/entities/Profile/testing';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import {
  ProfileSchema,
  ValidateProfileError,
} from '../types/EditableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
};

describe('profileSlice', () => {
  test('setReadonly должна изменять параметр readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('setReadonly должна изменять параметр readonly', () => {
    const state: DeepPartial<ProfileSchema> = { data };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('updateProfileData.pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('updateProfileData.fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
