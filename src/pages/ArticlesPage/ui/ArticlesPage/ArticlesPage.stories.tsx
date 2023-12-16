import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockedArticle } from '@/shared/mocks/mockedArticle';
import { ArticleView } from '@/entities/Article/testing';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

const entities = {
  1: { ...mockedArticle, id: '1' },
  2: { ...mockedArticle, id: '2' },
  3: { ...mockedArticle, id: '3' },
  4: { ...mockedArticle, id: '4' },
  5: { ...mockedArticle, id: '5' },
  6: { ...mockedArticle, id: '6' },
  7: { ...mockedArticle, id: '7' },
  8: { ...mockedArticle, id: '8' },
};

export const Tail: Story = {
  decorators: [StoreDecorator({
    articlePage: {
      ids: [1, 2, 3, 4, 5, 6, 7, 8],
      entities,
      view: ArticleView.SMALL,
    },
  })],
};

export const List: Story = {
  decorators: [StoreDecorator({
    articlePage: {
      ids: [1, 2, 3, 4, 5, 6, 7, 8],
      entities,
      view: ArticleView.BIG,
    },
  })],
};

export const TailLoading: Story = {
  decorators: [StoreDecorator({
    articlePage: {
      ids: [1, 2, 3, 4, 5, 6, 7, 8],
      entities,
      view: ArticleView.SMALL,
      isLoading: true,
    },
  })],
};

export const ListLoading: Story = {
  decorators: [StoreDecorator({
    articlePage: {
      ids: [1, 2, 3, 4, 5, 6, 7, 8],
      entities,
      isLoading: true,
    },
  })],
};
