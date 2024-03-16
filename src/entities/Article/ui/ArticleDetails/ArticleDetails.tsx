import { memo } from 'react';
import { ArticleDetailsProps } from '../../types/ArticleDetailsProps';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { ArticleDetailsRedisigned } from '../ArticleDetailsRedisigned/ArticleDetailsRedisigned';
import { ArticleDetailsDeprecated } from '../ArticleDetailsDeprecated/ArticleDetailsDeprecated';

export const ArticleDetails = memo((props: ArticleDetailsProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<ArticleDetailsRedisigned {...props} />}
    off={<ArticleDetailsDeprecated {...props} />}
  />
));
