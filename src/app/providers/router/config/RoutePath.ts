import { AppRoutes } from './AppRoutes';

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.profile]: '/profile/', // + id
  [AppRoutes.articles]: '/articles',
  [AppRoutes.article_details]: '/articles/', // + id
  [AppRoutes.article_create]: '/articles/new',
  [AppRoutes.article_edit]: '/articles/:id/edit',
  [AppRoutes.admin_panel]: '/admin',
  [AppRoutes.forbidden]: '/forbidden',

  // last
  [AppRoutes.not_found]: '*',
};
