import { StateSchema } from 'app/providers/StoreProvider';

export const getUserRoles = (state: StateSchema) => state?.user.authData?.roles;
