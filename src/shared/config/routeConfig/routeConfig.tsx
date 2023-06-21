import { AboutPage } from 'pages/AboutPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  main = 'main',
  about = 'about',
  profile = 'profile', // + id
  articles = 'articles', // + id
  article_details = 'article_details',

  // last
  not_found = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.profile]: '/profile/', // + id
  [AppRoutes.articles]: '/articles',
  [AppRoutes.article_details]: '/articles/', // + id

  // last
  [AppRoutes.not_found]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.main]: {
    path: RoutePath[AppRoutes.main],
    element: <MainPage />,
  },
  [AppRoutes.about]: {
    path: RoutePath[AppRoutes.about],
    element: <AboutPage />,
  },
  [AppRoutes.profile]: {
    path: `${RoutePath[AppRoutes.profile]}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.articles]: {
    path: RoutePath[AppRoutes.articles],
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.article_details]: {
    path: `${RoutePath[AppRoutes.article_details]}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // last
  [AppRoutes.not_found]: {
    path: RoutePath[AppRoutes.not_found],
    element: <NotFoundPage />,
  },
};
