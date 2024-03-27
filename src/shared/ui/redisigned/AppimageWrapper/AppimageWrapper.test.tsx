import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/ComponentRender/ComponentRender';
import { AppimageWrapper } from './AppimageWrapper';
import Image from '@/shared/assets/test/ImageTest.png';

describe('AppimageWrapper', () => {
  test('Компонент рендерится', () => {
    ComponentRender(<AppimageWrapper src={Image} />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toBeInTheDocument();
  });

  test('Компонент рендерится с классом fit-contain', () => {
    ComponentRender(<AppimageWrapper src={Image} objectFit='contain' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('fit-contain');
  });

  test('Компонент рендерится с классом fit-cover', () => {
    ComponentRender(<AppimageWrapper src={Image} objectFit='cover' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('fit-cover');
  });

  test('Компонент рендерится с классом ratio-horizontal', () => {
    ComponentRender(<AppimageWrapper src={Image} ratio='horizontal' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('ratio-horizontal');
  });

  test('Компонент рендерится с классом ratio-horizontal-wide', () => {
    ComponentRender(<AppimageWrapper src={Image} ratio='horizontal-wide' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('ratio-horizontal-wide');
  });

  test('Компонент рендерится с классом ratio-vertical', () => {
    ComponentRender(<AppimageWrapper src={Image} ratio='vertical' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('ratio-vertical');
  });

  test('Компонент рендерится с классом ratio-vertical-wide', () => {
    ComponentRender(<AppimageWrapper src={Image} ratio='vertical-wide' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('ratio-vertical-wide');
  });

  test('Компонент рендерится с классом ratio-none', () => {
    ComponentRender(<AppimageWrapper src={Image} ratio='none' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('ratio-none');
  });

  test('Компонент рендерится с классом width-max', () => {
    ComponentRender(<AppimageWrapper src={Image} width='max' />);
    const component = screen.getByTestId('AppimageWrapper');

    expect(component).toHaveClass('width-max');
  });
});
