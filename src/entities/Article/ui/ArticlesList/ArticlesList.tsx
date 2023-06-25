import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './ArticlesList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.BIG,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticlesListItem
      article={article}
      view={view}
      key={article.id}
    />
  );

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
        {
          new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
            // eslint-disable-next-line
            <ArticleListItemSkeleton view={view} key={index} />
          ))
        }
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
      {
        articles.length > 0
          ? articles.map(renderArticle)
          : null
      }
    </div>
  );
});
