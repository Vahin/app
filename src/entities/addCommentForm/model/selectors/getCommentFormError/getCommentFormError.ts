import { StateSchema } from '@/app/providers/StoreProvider';

export const getCommentFormError = (state: StateSchema) => state?.addCommentForm?.error;
