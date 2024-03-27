import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { AppLink } from './AppLink';

describe('AppLink', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<AppLink to='#'>Link</AppLink>);
    const link = screen.getByTestId('AppLink');

    expect(link).toBeInTheDocument();
  });
});
