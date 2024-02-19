import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import App from './app/App';

import '@/shared/config/i18n/i18n';

const container = document.getElementById('root');
if (!container)
  throw new Error(
    'Корневой элемент не найден. Не удалось смонтировать приложение.',
  );
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
