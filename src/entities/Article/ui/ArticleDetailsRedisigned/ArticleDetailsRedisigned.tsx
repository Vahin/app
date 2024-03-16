import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError';
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading';
import { ArticleDetailsProps } from '../../types/ArticleDetailsProps';
import { ArticleDetailsContent } from './ArticleDetailsContent';
import { ArticleDetaisSkeleton } from './ArticleDetaisSkeleton';
import { ArticleDetailsError } from './ArticleDetailsError';

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetailsRedisigned = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  let content;

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    content = <ArticleDetaisSkeleton />;
  } else if (error) {
    content = <ArticleDetailsError />;
  } else {
    content = <ArticleDetailsContent className={className} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
