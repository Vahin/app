import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlePageNum } from '../../selectors/getArticlePageNum/getArticlePageNum';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const {
      dispatch,
      getState,
    } = thunkAPI;
    const inited = getArticlesPageInited(getState());
    const page = getArticlePageNum(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order');
      const sortFromUrl = searchParams.get('sort');
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type');

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder));
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField));
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl as ArticleType));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({ page }));
    }
  },
);
