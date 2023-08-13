import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollSaver = (state: StateSchema) => state?.scroll.records;
