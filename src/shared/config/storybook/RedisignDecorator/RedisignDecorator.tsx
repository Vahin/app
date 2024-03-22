import { StoryFn } from '@storybook/react';
import './RedisignDecorator.scss';

export const RedisignDecorator = (Story: StoryFn) => (
  <div className='RedisignDecorator'>
    <Story />
  </div>
);
