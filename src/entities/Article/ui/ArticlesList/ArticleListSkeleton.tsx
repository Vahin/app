import { memo } from 'react';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemBigSkeleton } from '../ArticleListItemBig/ArticleListItemBigSkeleton';
import { ArticleListItemSmallSkeleton } from '../ArticleListItemSmall/ArticleListItemSmallSkeleton';

interface ArticleListItemSkeletonProps {
  view?: ArticleView;
}

export const ArticleListSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { view = ArticleView.SMALL } = props;

    return view === ArticleView.BIG ? (
      <ArticleListItemBigSkeleton />
    ) : (
      <ArticleListItemSmallSkeleton />
    );
  },
);
