import './styles/index.scss';

import { Header } from 'widjets/Header';
import { Sidebar } from 'widjets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInited, userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className="app">
      <Suspense fallback="">
        <Header />

        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            {inited && <AppRouter />}
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
