import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageIsLoading = (state: StateSchema) => state?.articlePage?.isLoading;
