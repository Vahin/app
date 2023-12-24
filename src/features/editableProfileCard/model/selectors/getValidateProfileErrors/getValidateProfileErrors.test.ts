import { StateSchema } from '@/app/providers/StoreProvider';
import { getValidateProfileErrors } from './getValidateProfileErrors';
import { ValidateProfileError } from '../../types/EditableProfileCardSchema';

const errors: ValidateProfileError[] = [
  ValidateProfileError.INCORRECT_AGE,
  ValidateProfileError.INCORRECT_USER_DATA,
];

describe('getValidateProfileErrors', () => {
  test('Должен вернуть значение, при заполненном стэйте', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };

    expect(getValidateProfileErrors(state as StateSchema)).toEqual(errors);
  });

  test('Должен вернуть значение, при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
  });
});
