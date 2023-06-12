import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError.test', () => {
  test('Возвращает корректное значение при наличии ошибки', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };

    expect(getLoginError(state as StateSchema)).toBe('error');
  });

  test('Возвращает корректное значение при отсутствии ошибки', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toBe(undefined);
  });
});
