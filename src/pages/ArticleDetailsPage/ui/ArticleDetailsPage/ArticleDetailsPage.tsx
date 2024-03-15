import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/deprecated/Text';
import { ArticleDetailsComments } from '@/features/ArticleDetailsComments';
import { Page } from '@/widjets/Page';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
import { ArticleRating } from '@/features/articleRating';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo((props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <Text text={t('Статья не найдена')} />
      </div>
    );
  }

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <StickyContentLayout
          content={
            <Page
              className={classNames(cls.ArticleDetailsPage, {}, [className])}
            >
              <VStack gap='32'>
                <DetailsContainer />
                <ArticleRating articleId={id} className={cls.rating} />
                <ArticleRecommendationList />
                <ArticleDetailsComments id={id} />
              </VStack>
            </Page>
          }
          right={<AdditionalInfoContainer />}
        />
      }
      off={
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <VStack gap='32'>
            <ArticleDetailsHeader id={id} />
            <ArticleDetails id={id} />
            <ArticleRating articleId={id} className={cls.rating} />
            <ArticleRecommendationList />
            <ArticleDetailsComments id={id} />
          </VStack>
        </Page>
      }
    />
  );
});

export default memo(ArticleDetailsPage);
