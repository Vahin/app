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
  settings = 'settings',

  // last
  not_found = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.main,
  [getRouteAbout()]: AppRoutes.about,
  [getRouteProfile(':id')]: AppRoutes.profile,
  [getRouteArticles()]: AppRoutes.articles,
  [getRouteArticleDetails(':id')]: AppRoutes.article_details,
  [getRouteArticleCreate()]: AppRoutes.article_create,
  [getRouteArticleEdit(':id')]: AppRoutes.article_edit,
  [getRouteAdminPanel()]: AppRoutes.admin_panel,
  [getRouteForbidden()]: AppRoutes.forbidden,
  [getRouteSettings()]: AppRoutes.settings,
};
