import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationError = (state: StateSchema) => state?.articleRecommendation?.error;
