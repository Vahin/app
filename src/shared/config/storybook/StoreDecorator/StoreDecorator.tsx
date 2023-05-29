import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

const initialState: DeepPartial<StateSchema> = {
  counter: {
    value: 0,
  },
};

export const StoreDecorator = (Story: StoryFn) => (
  <StoreProvider initialState={initialState as StateSchema}>
    <Story />
  </StoreProvider>
);
