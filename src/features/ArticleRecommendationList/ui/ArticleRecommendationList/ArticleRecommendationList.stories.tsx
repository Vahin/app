import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockedArticle } from '@/entities/Article/testing';
import { ArticleRecommendationList } from './ArticleRecommendationList';

const meta: Meta<typeof ArticleRecommendationList> = {
  title: 'features/ArticleRecommendationList',
  component: ArticleRecommendationList,
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationList>;

const article = mockedArticle;

export const Default: Story = {
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
          { ...article, id: '4' },
        ],
      },
    ],
  },
};
