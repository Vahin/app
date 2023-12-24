import { getQueryparams } from './addQueryParams';

describe('addQueryParams', () => {
  test('Тест с одним параметром', () => {
    const params = getQueryparams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  test('Тест с двумя параметрами', () => {
    const params = getQueryparams({
      test: 'value',
      second: '2',
    });

    expect(params).toBe('?test=value&second=2');
  });

  test('Тест с неопределенным параметром', () => {
    const params = getQueryparams({
      test: 'value',
      second: undefined,
    });

    expect(params).toBe('?test=value');
  });
});
