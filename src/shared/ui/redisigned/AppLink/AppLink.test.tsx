import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { AppLink } from './AppLink';

describe('AppLink', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<AppLink to='#'>Link</AppLink>);
    const link = screen.getByTestId('AppLink');

    expect(link).toBeInTheDocument();
  });

  test('Компонент рендерится c классом primary', () => {
    ComponentRender(<AppLink to='#'>Link</AppLink>);
    const link = screen.getByTestId('AppLink');

    expect(link).toHaveClass('primary');
  });

  test('Компонент рендерится c классом red', () => {
    ComponentRender(
      <AppLink to='#' variant='red'>
        Link
      </AppLink>,
    );
    const link = screen.getByTestId('AppLink');

    expect(link).toHaveClass('red');
  });
});
