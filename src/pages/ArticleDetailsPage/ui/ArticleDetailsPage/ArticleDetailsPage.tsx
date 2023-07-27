import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { ArticleDetailsComments } from 'features/ArticleDetailsComments';
import { Page } from 'widjets/Page';
import { ArticleRecommendationList } from 'features/ArticleRecommendationList';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

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
    <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
      <ArticleDetailsHeader id={id} />
      <ArticleDetails id={id} />
      <ArticleRecommendationList />
      <ArticleDetailsComments id={id} />
    </Page>
  );
});

export default memo(ArticleDetailsPage);
