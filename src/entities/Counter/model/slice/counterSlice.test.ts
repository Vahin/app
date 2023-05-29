import { counterActions, counterReducer } from './counterSlice';
import { counterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
  test('increment', () => {
    const state: counterSchema = {
      value: 10,
    };

    expect(counterReducer(state as counterSchema, counterActions.increment())).toEqual({ value: 11 });
  });

  test('decrement', () => {
    const state: counterSchema = {
      value: 10,
    };

    expect(counterReducer(state as counterSchema, counterActions.decrement())).toEqual({ value: 9 });
  });

  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
