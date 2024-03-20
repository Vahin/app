import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { useArticleRecomendationsList } from '../../api/articlesRecommendationsApi';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redisigned/Text';
import { ArticlesList } from '@/entities/Article';

interface ArticleRecommendationListProps {
  className?: string;
}

export const RecommendationListRedisigned = memo(
  (props: ArticleRecommendationListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { data, isLoading, error } = useArticleRecomendationsList(4);

    if (isLoading) {
      return (
        <HStack max justify='spaceBetween' gap='16'>
          <Skeleton height={346} border='32px' />
          <Skeleton height={346} border='32px' />
          <Skeleton height={346} border='32px' />
        </HStack>
      );
    }

    if (error || !data) {
      return null;
    }

    return (
      <VStack
        gap='8'
        className={classNames('', {}, [className])}
        data-testid='ArticleRecommendationList'
      >
        <Text title={t('Рекомендуем')} />
        <ArticlesList articles={data.slice(0, 3)} target='_blank' />
      </VStack>
    );
  },
);
