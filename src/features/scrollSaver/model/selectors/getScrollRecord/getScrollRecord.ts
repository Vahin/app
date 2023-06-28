import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollSaver } from '../getScrollSaver/getScrollSaver';

export const getScrollRecord = createSelector(
  getScrollSaver,
  (state: StateSchema, path: string) => path,
  (record, path) => record[path] || 0,
);
