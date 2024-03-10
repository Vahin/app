import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Card } from './Card';

describe('Card', () => {
  test('Компонент карточки рендерится.', () => {
    ComponentRender(<Card>text</Card>);

    const card = screen.getByTestId('Card');

    expect(card).toBeInTheDocument();
  });
});
