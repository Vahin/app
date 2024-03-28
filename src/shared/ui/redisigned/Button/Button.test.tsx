import { screen } from '@testing-library/react';
import { Button } from './Button';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';

describe('Button', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<Button>Button</Button>);
    const component = screen.getByTestId('Button');

    expect(component).toBeInTheDocument();
  });
});
