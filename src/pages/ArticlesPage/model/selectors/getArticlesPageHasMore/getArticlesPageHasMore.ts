import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageHasMore = (state: StateSchema) => state?.articlePage?.hasMore;
