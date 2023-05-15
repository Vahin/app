import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  main = 'main',
  about = 'about',
  not_found = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.main]: '/',
  [AppRoutes.about]: '/about',
  [AppRoutes.not_found]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.main]: {
    path: RoutePath[AppRoutes.main],
    element: <MainPage />,
  },
  [AppRoutes.about]: {
    path: RoutePath[AppRoutes.about],
    element: <AboutPage />,
  },
  [AppRoutes.not_found]: {
    path: RoutePath[AppRoutes.not_found],
    element: <NotFoundPage />,
  },
};
