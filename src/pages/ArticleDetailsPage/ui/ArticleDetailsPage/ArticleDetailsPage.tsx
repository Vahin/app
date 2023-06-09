import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { ArticleDetailsComments, addCommentForArticle } from 'features/ArticleDetailsComments';
import { AddCommentForm } from 'features/addCommentForm';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
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
  const dispatch = useAppDispatch();

  const onSendComment = useCallback((value: string) => {
    dispatch(addCommentForArticle(value));
  }, [dispatch]);

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
      <Text
        text={t('Рекомендации')}
        className={cls.recommendTitle}
        size="lg"
      />
      <ArticleRecommendationList />
      <Text
        text={t('Комментарии')}
        className={cls.commentTitle}
        size="lg"
      />
      <AddCommentForm onSendComment={onSendComment} />
      <ArticleDetailsComments id={id} />
    </Page>
  );
});

export default memo(ArticleDetailsPage);
