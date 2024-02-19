import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageError = (state: StateSchema) =>
  state?.articlePage?.error;
