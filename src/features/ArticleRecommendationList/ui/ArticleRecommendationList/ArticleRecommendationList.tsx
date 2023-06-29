import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticlesList } from 'entities/Article';
import { useSelector } from 'react-redux';
import { fetchArticleRecommendation } from '../../model/services/fetchArticleRecommendation';
import cls from './ArticleRecommendationList.module.scss';
import { articleRecommendationReducer, getRecommendationState } from '../../model/slice/articleRecommendation';

interface ArticleRecommendationListProps {
  className?: string;
}

const reducers: ReducersList = {
  articleRecommendation: articleRecommendationReducer,
};

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const dispatch = useAppDispatch();

  const articles = useSelector(getRecommendationState.selectAll);

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendation());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.ArticleRecommendationList, {}, [className])}>
        <ArticlesList
          articles={articles}
          className={cls.articles}
          target="_blank"
        />
      </div>
    </DynamicModuleLoader>
  );
});
