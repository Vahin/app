import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments';
import { Page } from '@/widjets/Page';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { ArticleRating } from '@/features/articleRating';
import { VStack } from '@/shared/ui/Stack';
import {
  ToggleComponentFeatures,
  getFeatureFlags,
  toggleFeatures,
} from '@/shared/lib/features';
import { Card } from '@/shared/ui/Card';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const isArticleRecomendationListEnabled = getFeatureFlags(
    'isArticleRecomendationListEnabled',
  );

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text text={t('Статья не найдена')} />
      </div>
    );
  }

  const articleRating = toggleFeatures({
    name: 'isArticleRatingEnabled',
    on: () => <ArticleRating articleId={id} className={cls.rating} />,
    off: () => <Card>{t('Оценка статей скоро появиться')}</Card>,
  });

  return (
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <VStack gap='32'>
        <ArticleDetailsHeader id={id} />
        <ArticleDetails id={id} />
        {articleRating}
        <ToggleComponentFeatures
          feature='isArticleRatingEnabled'
          on={<ArticleRating articleId={id} className={cls.rating} />}
          off={<Card>{t('Оценка статей скоро появиться')}</Card>}
        />
        {isArticleRecomendationListEnabled && <ArticleRecommendationList />}
        <ArticleDetailsComments id={id} />
      </VStack>
    </Page>
  );
});

export default memo(ArticleDetailsPage);
