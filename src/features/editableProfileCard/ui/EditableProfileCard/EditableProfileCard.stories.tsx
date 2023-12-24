import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Profile } from '@/entities/Profile/testing';
import Avatar from '@/shared/assets/test/medoed.jpeg';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

const data: Profile = {
  username: 'username',
  firstname: 'firstname',
  lastname: 'lastname',
  age: 30,
  avatar: Avatar,
  city: 'city',
  country: 'Russia',
  currency: 'EUR',
  id: '1',
};

export const Default: Story = {
  decorators: [StoreDecorator({
    profile: {
      data,
      form: data,
    },
    user: {
      authData: {
        id: '1',
      },
    },
  })],
};

export const Readonly: Story = {
  decorators: [StoreDecorator({
    profile: {
      data,
      form: data,
      readonly: true,
    },
  })],
};
