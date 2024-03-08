import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticlesList } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { useArticleRecomendationsList } from '../../api/articlesRecommendationsApi';
import cls from './ArticleRecommendationList.module.scss';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { data, isLoading, error } = useArticleRecomendationsList(4);

    if (isLoading) {
      // ! Обработать состояния загрузки и ошибки
      return <Loader />;
    }

    if (error) {
      return (
        // eslint-disable-next-line
        <div>Error</div>
      );
    }

    if (!data) {
      return (
        // eslint-disable-next-line
        <div>No data</div>
      );
    }

    return (
      <VStack
        gap='8'
        className={classNames('', {}, [className])}
        data-testid='ArticleRecommendationList'
      >
        <Text text={t('Рекомендации')} size='lg' />
        <ArticlesList
          articles={data}
          className={cls.articles}
          target='_blank'
        />
      </VStack>
    );
  },
);
