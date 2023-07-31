import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article/model/consts/consts';

export const getArticlesPageSort = (state: StateSchema) => state?.articlePage?.sort || ArticleSortField.CREATED;
