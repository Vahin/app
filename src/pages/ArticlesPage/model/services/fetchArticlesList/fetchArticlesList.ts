import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageTabType } from '../../selectors/getArticlesPageTabType/getArticlesPageTabType';

interface fetchArticlesListProps {
  page: number;
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const {
      extra,
      dispatch,
      rejectWithValue,
      getState,
    } = thunkAPI;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageTabType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === 'ALL' ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
