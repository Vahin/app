import {
  HTMLAttributeAnchorTarget, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text/Text';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticlesList.module.scss';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticleListItemSkeleton } from '../ArticlesListItem/ArticleListItemSkeleton';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget
}

export const ArticlesList = memo((props: ArticlesListProps) => {
  const { t } = useTranslation();
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;

  const renderArticle = (article: Article) => (
    <ArticlesListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
    />
  );

  const getSkeletons = useCallback((view: ArticleView) => (
    <>
      {new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((_, index) => (
        // eslint-disable-next-line
        <ArticleListItemSkeleton view={view} key={index} />
      ))}
    </>
  ), []);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
        <Text text={t('Статьи не найдены')} />
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
      {
        isLoading && getSkeletons(view)
      }
    </div>
  );
});
