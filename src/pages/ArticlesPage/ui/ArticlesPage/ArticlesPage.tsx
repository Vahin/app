import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView, ArticleViewSelector, ArticlesList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { getArticlePageNum } from '../../model/selectors/getArticlePageNum/getArticlePageNum';
import {
  getArticlePageIsLoading,
} from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageReducer, articlesPageActions, getArticles } from '../../model/slice/articlePageSlice';
import cls from './ArticlesPage.module.scss';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';

const reducers: ReducersList = {
  articlePage: articlesPageReducer,
};

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);
  const page = useSelector(getArticlePageNum);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page }));
  }, [dispatch]);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.ArticlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} className={cls.viewSelector} />
        <ArticlesList
          articles={articles}
          isLoading={isLoading}
          view={view}
        />
      </Page>
    </DynamicModuleLoader>
  );
});

export default memo(ArticlesPage);
