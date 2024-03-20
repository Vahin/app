import './styles/index.scss';

import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DeprecatedHeader, Header } from '@/widjets/Header';

import {
  getUserInited,
  initAuthData,
  useUserFeatureByKey,
} from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DepricatedSidebar, Sidebar } from '@/widjets/Sidebar';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout/AppLoaderLayout';
import { PageLoader } from '@/widjets/PageLoader';

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const redisigned = useUserFeatureByKey('isAppRedisigned');

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.dataset.redisigned = redisigned ? 'true' : 'false';
  }, [redisigned]);

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
              toolbar={<div>111</div>}
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
};

export default App;
