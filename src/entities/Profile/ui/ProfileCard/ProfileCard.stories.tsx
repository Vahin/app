import type { Meta, StoryObj } from '@storybook/react';
import { Profile } from 'entities/Profile/model/types/profile';
import avatar from 'shared/assets/test/medoed.jpeg';
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
  avatar,
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
