import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Icon } from './Icon';
import Image from '@/shared/assets/icons/copy.svg';

describe('Icon', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<Icon Svg={Image} />);
    const component = screen.getByTestId('Icon');

    expect(component).toBeInTheDocument();
  });

  test('Компонент рендерится с кнопкой и иконкой с пропсом clickable', () => {
    ComponentRender(<Icon Svg={Image} clickable onClick={jest.fn()} />);
    const button = screen.getByTestId('Button');
    const icon = screen.getByTestId('Button.Icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  test('Переданная функция вызывается при нажатии', async () => {
    const onClickMock = jest.fn();
    ComponentRender(<Icon Svg={Image} clickable onClick={onClickMock} />);
    const button = screen.getByTestId('Button');

    await userEvent.click(button);

    expect(onClickMock).toHaveBeenCalled();
  });
});
