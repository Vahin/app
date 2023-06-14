import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widjets/PageLoader';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !route.authOnly || isAuth), [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>

    </Suspense>

  );
});
