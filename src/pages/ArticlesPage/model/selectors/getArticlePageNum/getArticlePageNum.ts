import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlePageNum = (state: StateSchema) =>
  state?.articlePage?.page || 1;
