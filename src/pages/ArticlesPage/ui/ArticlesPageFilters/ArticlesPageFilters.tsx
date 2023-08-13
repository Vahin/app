import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleSortSelector, ArticleViewSelector,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from '@/entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';
import { ArticleType } from '@/entities/Article/model/types/article';
import { ArticleSortField, ArticleView } from '@/entities/Article/model/consts/consts';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageSearch } from '../../model/selectors/getArticlesPageSearch/getArticlesPageSearch';
import cls from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { getArticlesPageOrder } from '../../model/selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../model/selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageTabType } from '../../model/selectors/getArticlesPageTabType/getArticlesPageTabType';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const tabsValue = useSelector(getArticlesPageTabType);

  const fetchData = useCallback((page: number) => {
    dispatch(fetchArticlesList({ page, replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData(1);
  }, [dispatch, fetchData]);

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData(1);
  }, [dispatch, fetchData]);

  const onChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchData(1);
  }, [dispatch, debouncedFetchData]);

  const onChangeTab = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value));
    dispatch(articlesPageActions.setPage(1));
    fetchData(1);
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} className={cls.viewSelector} />
      </div>
      <Card
        className={cls.search}
      >
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs value={tabsValue} onChangeTab={onChangeTab} className={cls.tabs} />
    </div>
  );
});
