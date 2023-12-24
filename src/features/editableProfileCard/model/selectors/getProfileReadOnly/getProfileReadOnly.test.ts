import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
  test('Должен вернуть значение, при заполненном стэйте со значением false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });

  test('Должен вернуть значение, при заполненном стэйте со значением true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('Должен вернуть значение, при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
