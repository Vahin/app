import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageInited = (state: StateSchema) => state?.articlePage?._inited;
