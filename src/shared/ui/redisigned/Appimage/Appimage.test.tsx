import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { Appimage } from './Appimage';
import Image from '@/shared/assets/test/ok-image-16-9.png';

describe('Appimage', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<Appimage src={Image} />);
    const component = screen.getByTestId('Appimage');

    expect(component).toBeInTheDocument();
  });

  test('Компонент возвращает fallback при некорректном пути', () => {
    ComponentRender(
      <Appimage src='' fallback={<div data-testid='Appimage.Error' />} />,
    );

    const component = screen.getByTestId('Appimage.Error');

    expect(component).toBeInTheDocument();
  });
});
