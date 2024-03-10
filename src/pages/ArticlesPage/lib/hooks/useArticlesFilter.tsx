import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageTabType } from '../../model/selectors/getArticlesPageTabType/getArticlesPageTabType';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const useArticlesFilter = () => {
  const dispatch = useAppDispatch();
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const tabsValue = useSelector(getArticlesPageTabType);

  const fetchData = useCallback(
    (page: number) => {
      dispatch(fetchArticlesList({ page, replace: true }));
    },
    [dispatch],
  );

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData(1);
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData(1);
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData(1);
    },
    [dispatch, debouncedFetchData],
  );

  const onChangeTab = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData(1);
    },
    [dispatch, fetchData],
  );

  return {
    order,
    sort,
    search,
    tabsValue,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeTab,
  };
};
