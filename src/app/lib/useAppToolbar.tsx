import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { ScrollToolbar } from '@/widjets/ScrollToolbar';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';

export const useAppToolbar = () => {
  const currentRoute = useRouteChange();

  const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
    articles: <ScrollToolbar />,
    article_details: <ScrollToolbar />,
    article_create: <ScrollToolbar />,
    article_edit: <ScrollToolbar />,
  };

  return toolbarByAppRoute[currentRoute];
};
