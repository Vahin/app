import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widjets/Navbar';
import { Sidebar } from 'widjets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
