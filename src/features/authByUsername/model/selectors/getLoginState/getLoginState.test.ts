import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('Возвращает корректное значение при полном стэйте', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username',
        password: '123123',
        error: undefined,
        isLoading: false,
      },
    };

    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
  });

  test('Возвращает корректное значение при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
