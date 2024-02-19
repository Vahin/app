import {
  CreateSliceOptions,
  SliceCaseReducers,
  bindActionCreators,
  createSlice,
} from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const buildSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    return useMemo(
      // @ts-ignore
      () => bindActionCreators(slice.actions, dispatch),
      [dispatch],
    );
  };

  return {
    ...slice,
    useActions,
  };
};
