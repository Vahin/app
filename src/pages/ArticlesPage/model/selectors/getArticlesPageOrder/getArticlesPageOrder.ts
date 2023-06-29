import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageOrder = (state: StateSchema) => state?.articlePage?.order || 'asc';
