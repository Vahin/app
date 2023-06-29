import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) => state?.articleRecommendation?.isLoading;
