import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
// eslint-disable-next-line fsd-vakhr/layers-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/types/theme';
// eslint-disable-next-line fsd-vakhr/layers-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
  theme?: Theme;
}

export interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export const TestProvider = (props: TestProviderProps) => {
  const { children, options = {} } = props;
  const { route = '/', initialState, asyncReducers, theme = 'light' } = options;

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider
        asyncReducers={asyncReducers}
        initialState={initialState as StateSchema}
      >
        <I18nextProvider i18n={i18nForTests}>
          <ThemeProvider themeProps={theme}>
            <div>{children}</div>
          </ThemeProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
};

export const ComponentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {},
) => render(<TestProvider options={options}>{component}</TestProvider>);
