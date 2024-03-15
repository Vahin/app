import { HTMLAttributeAnchorTarget, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticlesList.module.scss';
import { Article } from '../../model/types/article';
import { ArticlesListItem } from '../ArticlesListItem/ArticlesListItem';
import { ArticleListItemSkeletonDeprecated } from '../ArticlesListItem/ArticleListItemSkeletonDeprecated';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { ArticleListSkeleton } from './ArticleListSkeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redisigned/Stack';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
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

  const renderArticle = useCallback(
    (article: Article) => (
      <ArticlesListItem
        article={article}
        view={view}
        key={article.id}
        target={target}
      />
    ),
    [target, view],
  );

  const getSkeletons = useCallback(
    (view: ArticleView) => (
      <>
        {new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((_, index) => (
            <ToggleComponentFeatures
              feature='isAppRedisigned'
              on={
                <ArticleListSkeleton
                  view={view}
                  // eslint-disable-next-line
                  key={index}
                />
              }
              off={
                <ArticleListItemSkeletonDeprecated
                  view={view}
                  // eslint-disable-next-line
                  key={index}
                />
              }
            />
          ))}
      </>
    ),
    [],
  );

  const content = useMemo(
    () => (
      <>
        {articles.length > 0 ? articles.map(renderArticle) : null}
        {isLoading && getSkeletons(view)}
      </>
    ),
    [articles, getSkeletons, isLoading, renderArticle, view],
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticlesList, {}, [className, cls[view]])}>
        <Text text={t('Статьи не найдены')} />
      </div>
    );
  }

  return view === ArticleView.BIG ? (
    <VStack gap='16' max align='stretch'>
      {content}
    </VStack>
  ) : (
    <div className={cls.SmallLayout}>{content}</div>
  );
});
