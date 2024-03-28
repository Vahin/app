import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Code } from './Code';

const writeText = jest.fn();
Object.assign(navigator, {
  clipboard: {
    writeText,
  },
});

describe('Code', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<Code text='text text text' />);
    const component = screen.getByTestId('Code');

    expect(component).toBeInTheDocument();
  });

  test('При нажатии на кнопку копирования текст добавляется в буфер', async () => {
    const text = 'text text text';

    ComponentRender(<Code text={text} />);
    const button = screen.getByTestId('Code.CopyButton');

    await userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(text);
  });
});
