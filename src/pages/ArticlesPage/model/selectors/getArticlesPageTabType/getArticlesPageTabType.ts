import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageTabType = (state: StateSchema) => state?.articlePage?.type || 'ALL';
