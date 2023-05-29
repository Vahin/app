import './styles/index.scss';

import { Header } from 'widjets/Header';
import { Sidebar } from 'widjets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

const App = () => (
  <div className="app">
    <Suspense fallback="">
      <Header />

      <div className="content-page">
        <Sidebar />
        <div className="page-wrapper">
          <AppRouter />
        </div>
      </div>
    </Suspense>
  </div>
);

export default App;
