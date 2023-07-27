import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlePageSlice';
import { getArticlePageIsLoading } from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import { getArticlePageError } from '../../model/selectors/getArticlePageError/getArticlePageError';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const error = useSelector(getArticlePageError);
  const view = useSelector(getArticlePageView);

  return (
    <ArticlesList
      className={className}
      articles={articles}
      isLoading={isLoading}
      view={view}
    />
  );
});
