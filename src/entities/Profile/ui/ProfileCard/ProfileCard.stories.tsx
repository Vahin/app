import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from 'entities/Profile/model/types/profile';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
  avatar: 'https://i.pinimg.com/originals/e3/fa/6e/e3fa6ea88825ebb99d1ee5ff37a3b8ec.jpg',
};

export const Fulfilled: Story = {
  args: {
    data,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'Ошибка',
  },
};