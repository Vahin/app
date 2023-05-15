import { classNames } from './classNames';

describe('classNames: ', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const epected = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(epected);
  });

  test('with mods', () => {
    const epected = 'someClass class1 class2 hovered scrollable';

    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(epected);
  });

  test('with mods false', () => {
    const epected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(epected);
  });

  test('with mods undefined', () => {
    const epected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(epected);
  });
});
