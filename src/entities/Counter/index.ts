import { counterSchema } from './model/types/counterSchema';
import { counterReducer } from './model/slice/counterSlice';
import { Counter } from './ui/Counter';
import { getCounter } from './model/selectors/getCounter/getCounter';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';

export {
  counterReducer,
  Counter,
  counterSchema,
  getCounter,
  getCounterValue,
};
