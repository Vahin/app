import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter:', () => {
  test('should be render', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('should increase the value when the button is clicked', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('increment-button'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('should decrease the value when the button is clicked', () => {
    ComponentRender(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    userEvent.click(screen.getByTestId('decrement-button'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
