import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AddCommentForm } from '@/entities/addCommentForm';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slice/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redisigned/Text';
import { CommentList } from '@/entities/Comment';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsComments = memo(({ id }: { id: string }) => {
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const { t } = useTranslation('article-details');

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  }, [dispatch, id]);

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticle(value));
    },
    [dispatch],
  );

  const content = (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <VStack gap='16' max align='stretch'>
          <Text title={t('Комментарии')} bold />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
      }
      off={
        <VStack gap='8' max align='stretch'>
          <TextDeprecated text={t('Комментарии')} size='lg' />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={isLoading} comments={comments} />
        </VStack>
      }
    />
  );

  return (
    <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
  );
});
