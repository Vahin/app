import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widjets/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const content = (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <StickyContentLayout
          left={<ViewSelectorContainer />}
          right={<FiltersContainer />}
          content={
            <Page
              onScrollEnd={onLoadNextPart}
              className={classNames(cls.ArticlesPageRedisigned, {}, [
                className,
              ])}
              data-testid='ArticlesPage'
            >
              <ArticleInfiniteList />
            </Page>
          }
        />
      }
      off={
        <Page
          onScrollEnd={onLoadNextPart}
          className={classNames(cls.ArticlesPage, {}, [className])}
          data-testid='ArticlesPage'
        >
          <ArticlesPageFilters />
          <ArticleInfiniteList />
        </Page>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      {content}
    </DynamicModuleLoader>
  );
});

export default memo(ArticlesPage);
