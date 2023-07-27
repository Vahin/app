import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticlesList } from 'entities/Article';
import { Text } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecomendationsList } from '../../api/articlesRecommendationsApi';
import cls from './ArticleRecommendationList.module.scss';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const { data, isLoading, error } = useArticleRecomendationsList(4);

  if (isLoading || error || !data) {
    // ! Обработать состояния загрузки и ошибки
    return null;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        text={t('Рекомендации')}
        size="lg"
      />
      <ArticlesList
        articles={data}
        className={cls.articles}
        target="_blank"
      />
    </VStack>
  );
});
