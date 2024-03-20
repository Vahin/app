import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { mockedArticle } from '@/entities/Article/testing';
import { RecommendationListDeprecated } from './RecommendationListDeprecated';

const meta: Meta<typeof RecommendationListDeprecated> = {
  title: 'features/ArticleRecommendationList',
  component: RecommendationListDeprecated,
};

export default meta;

type Story = StoryObj<typeof RecommendationListDeprecated>;

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
