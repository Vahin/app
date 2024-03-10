import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { getArticlePageView } from '../../model/selectors/getArticlePageView/getArticlePageView';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlePageSlice';

interface ViewSelectorContainerProps {
  className?: string;
}

export const ViewSelectorContainer = memo(
  (props: ViewSelectorContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const view = useSelector(getArticlePageView);
    const dispatch = useAppDispatch();

    const onChangeView = useCallback(
      (newView: ArticleView) => {
        dispatch(articlesPageActions.setView(newView));
      },
      [dispatch],
    );

    return (
      <ArticleViewSelector
        view={view}
        onViewClick={onChangeView}
        className={className}
      />
    );
  },
);
