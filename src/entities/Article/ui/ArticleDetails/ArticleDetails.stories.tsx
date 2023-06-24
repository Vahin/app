import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockedArticle } from 'entities/Article/model/mocks/mockedArticle';
import { ArticleDetails } from './ArticleDetails';

const data = mockedArticle;

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
};

export default meta;

type Story = StoryObj<typeof ArticleDetails>;

export const Default: Story = {
  decorators: [StoreDecorator({
    articleDetails: {
      data,
    },
  })],
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
  decorators: [StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  })],
};

export const Error: Story = {
  decorators: [StoreDecorator({
    articleDetails: {
      error: 'error',
    },
  })],
};
