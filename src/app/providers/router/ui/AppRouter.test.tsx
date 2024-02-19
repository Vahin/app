import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { AppRouter } from './AppRouter';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User/testing';

describe('app/touter/AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAbout(),
    });

    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('Страница не найдена', async () => {
    ComponentRender(<AppRouter />, {
      route: '/dsadsada',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Редирект неавторизованного пользователя на главную', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
    });

    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ запрещен (Отсутствует роль)', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Доступ разрешен (Присутствует роль)', async () => {
    ComponentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN],
          },
        },
      },
    });

    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
