import './styles/index.scss';

import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widjets/Navbar';
import { Sidebar } from 'widjets/Sidebar';
import { Suspense } from 'react';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <div className='page-wrapper'>
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
