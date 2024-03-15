import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { ArticleListItemRedisigned } from './ArticleListItemRedisigned/ArticleListItemRedisigned';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem = (props: ArticlesListItemProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<ArticleListItemRedisigned {...props} />}
    off={<ArticleListItemDeprecated {...props} />}
  />
);
