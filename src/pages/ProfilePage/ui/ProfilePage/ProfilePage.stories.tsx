import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import type { Profile } from '@/entities/Profile/testing';
import Avatar from '@/shared/assets/test/medoed.jpeg';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
};

export default meta;

const data: Profile = {
  firstname: 'Danil',
  lastname: 'Vakrushev',
  country: 'Russia',
  city: 'Chelyabinsk',
  age: 31,
  currency: 'RUB',
  username: 'admin',
  avatar: Avatar,
};

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      profile: {
        form: data,
        data,
      },
    }),
  ],
};
