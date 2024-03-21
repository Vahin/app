import { useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { AppRouteByPathPattern, AppRoutes } from '@/shared/const/router';

export const useRouteChange = () => {
  const location = useLocation();
  const [appRoute, setAppRoute] = useState<AppRoutes>(AppRoutes.main);

  useEffect(() => {
    Object.entries(AppRouteByPathPattern).forEach(([pattern, route]) => {
      if (matchPath(pattern, location.pathname)) {
        setAppRoute(route);
      }
    });
  }, [location.pathname]);

  return appRoute;
};
