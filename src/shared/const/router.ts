export enum AppRoutes {
  main = 'main',
  about = 'about',
  profile = 'profile', // + id
  articles = 'articles', // + id
  article_details = 'article_details',
  article_create = 'article_create',
  article_edit = 'article_edit',
  admin_panel = 'admin_panel',
  forbidden = 'forbidden',

  // last
  not_found = 'not_found',
}

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
