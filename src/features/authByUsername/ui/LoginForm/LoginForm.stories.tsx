import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Fulfilled: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'Username',
      password: '123',
    },
  })],
};

export const Error: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'Username',
      password: '123',
      error: 'Вы ввели неверный логин или пароль',
    },
  })],
};

export const Loading: Story = {
  decorators: [StoreDecorator({
    loginForm: {
      username: 'Username',
      password: '123',
      isLoading: true,
    },
  })],
};
