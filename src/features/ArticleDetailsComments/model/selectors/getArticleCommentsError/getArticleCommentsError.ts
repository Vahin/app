import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticleCommentsError = (state: StateSchema) => state?.articleDetailsComments?.error || undefined;
