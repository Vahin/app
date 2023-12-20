import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from './getArticleDetailsData';
import { Article } from '../../types/article';
import { mockedArticle } from '../../../mocks/mockedArticle';

const data: Article = mockedArticle;

describe('getArticleDetailsData', () => {
  test('Должен вернуть значение, при заполненном стэйте', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('Должен вернуть значение, при пустом стэйте', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
