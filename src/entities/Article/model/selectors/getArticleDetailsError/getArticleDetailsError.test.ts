import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsError } from './getArticleDetailsError';

describe('getArticleDetailsError', () => {
  test('должен вернуть строку с ошибкой, если она есть', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error',
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
  });

  test('Должен вернуть undefined, если ошибки в стейте нет', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
