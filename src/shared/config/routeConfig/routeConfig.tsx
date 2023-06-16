import { AboutPage } from 'pages/AboutPage';
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
  profile = 'profile',

  // last
  not_found = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.profile]: '/profile',

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
    path: RoutePath[AppRoutes.profile],
    element: <ProfilePage />,
    authOnly: true,
  },

  // last
  [AppRoutes.not_found]: {
    path: RoutePath[AppRoutes.not_found],
    element: <NotFoundPage />,
  },
};
