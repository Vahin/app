import './styles/index.scss';

import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DeprecatedHeader, Header } from '@/widjets/Header';

import { getUserInited, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DepricatedSidebar, Sidebar } from '@/widjets/Sidebar';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout/AppLoaderLayout';
import { PageLoader } from '@/widjets/PageLoader';
import { useAppToolbar } from './lib/useAppToolbar';
import { useAppRedisign, withTheme } from './providers/ThemeProvider';

const App = memo(() => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useAppRedisign();

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!inited) {
    return (
      <ToggleComponentFeatures
        feature='isAppRedisigned'
        on={<AppLoaderLayout />}
        off={<PageLoader />}
      />
    );
  }

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <div id='App' className='app'>
          <Suspense fallback=''>
            <MainLayout
              content={<AppRouter />}
              header={<Header />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          </Suspense>
        </div>
      }
      off={
        <div id='App' className='app'>
          <Suspense fallback=''>
            <DeprecatedHeader />

            <div className='content-page'>
              <DepricatedSidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
    />
  );
});

export default withTheme(App);
