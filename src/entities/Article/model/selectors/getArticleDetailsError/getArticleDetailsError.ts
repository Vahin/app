import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema) => state?.articleDetails?.error;
