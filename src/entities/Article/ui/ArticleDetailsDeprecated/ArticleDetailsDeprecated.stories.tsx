import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated';
import { mockedArticle } from '../../mocks/mockedArticle';

const data = mockedArticle;

const meta: Meta<typeof ArticleDetailsDeprecated> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetailsDeprecated,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsDeprecated>;

export const Default: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: {
        data,
      },
    }),
  ],
  // ! Костыль
  parameters: {
    loki: {
      skip: true,
    },
  },
};

export const Loading: Story = {
  parameters: {
    loki: {
      skip: true,
    },
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        isLoading: true,
      },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    StoreDecorator({
      articleDetails: {
        error: 'error',
      },
    }),
  ],
};
