import { memo } from 'react';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { RecommendationListDeprecated } from '../RecommendationListDeprecated/RecommendationListDeprecated';
import { RecommendationListRedisigned } from '../RecomendationListRedisigned/RecomendationListRedisigned';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={<RecommendationListRedisigned {...props} />}
      off={<RecommendationListDeprecated {...props} />}
    />
  ),
);
