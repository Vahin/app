import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state?.articleDetailsComments?.isLoading || false;
