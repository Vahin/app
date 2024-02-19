import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const { t } = useTranslation();
  const { className, articleId } = props;
  const authData = useSelector(getUserAuthData);
  const userId = authData ? authData.id : '';
  const { data, isLoading } = useArticleRating({ articleId, userId });
  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        rateArticleMutation({
          userId,
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (e) {
        console.log(e);
      }
    },
    [rateArticleMutation, articleId, userId],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton width='100%' height='120px' />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      className={classNames('', {}, [className])}
      title={t('Оцените статью')}
      hasFeedback
      feedbackTitle={t('Оставьте отзыв')}
      rate={rating?.rate}
      onAccept={onAccept}
      onCancel={onCancel}
    />
  );
});

export default ArticleRating;
