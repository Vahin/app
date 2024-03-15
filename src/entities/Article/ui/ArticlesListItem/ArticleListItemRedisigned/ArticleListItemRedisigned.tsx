import { memo } from 'react';
import { ArticleView } from '../../../model/consts/consts';
import { ArticleListItemBig } from '../../ArticleListItemBig/ArticleListItemBig';
import { ArticleListItemProps } from '../../../types/ArticleListItemProps';
import { ArticleListItemSmall } from '../../ArticleListItemSmall/ArticleListItemSmall';

export const ArticleListItemRedisigned = memo((props: ArticleListItemProps) => {
  const { view = ArticleView.SMALL } = props;

  return view === ArticleView.BIG ? (
    <ArticleListItemBig {...props} />
  ) : (
    <ArticleListItemSmall {...props} />
  );
});
