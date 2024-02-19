import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlePageNum } from '../../selectors/getArticlePageNum/getArticlePageNum';
import { getArticlePageIsLoading } from '../../selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchNextArticlePage', async (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const hasMore = getArticlesPageHasMore(getState());
  const page = getArticlePageNum(getState());
  const isLoading = getArticlePageIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));
    dispatch(fetchArticlesList({ page: page + 1 }));
  }
});
