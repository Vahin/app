import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean,
  roles?: UserRole[]
}

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

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.main]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.about]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.profile]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.articles]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.article_create]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.article_edit]: {
    path: `${RoutePath.article_edit}`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.article_details]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.admin_panel]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.ADMIN, UserRole.MANAGER],
  },
  [AppRoutes.forbidden]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
  },

  // last
  [AppRoutes.not_found]: {
    path: RoutePath[AppRoutes.not_found],
    element: <NotFoundPage />,
  },
};
