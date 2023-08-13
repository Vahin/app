import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage', () => {
  test('Должен запрашивать новые статьи с корректным стэйтом', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  test('Не должен запрашивать данные, если параметр hasMore равен false', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('Не должен запрашивать данные, если параметр isLoading равен true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlePage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
