import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageLimit = (state: StateSchema) =>
  state?.articlePage?.limit || 9;
