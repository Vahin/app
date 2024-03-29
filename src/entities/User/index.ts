export { updateFeatureFlags } from './model/services/updateFeatureFlags';

export {
  useUserFeatureByKey,
  useUserFeature,
  getUserFeatures,
  getUserFeaturesByKey,
} from './model/selectors/features/features';

export { initAuthData } from './model/services/initAuthData';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export {
  useJsonSettings,
  getJsonSettings,
  useUserTheme,
} from './model/selectors/jsonSettings/jsonSettings';

export { getUserRoles } from './model/selectors/getUserRoles/getUserRoles';

export { UserRole } from './model/types/user';

export { getIsUserAdmin } from './model/selectors/getIsUserAdmin/getIsUserAdmin';
export { getIsUserManager } from './model/selectors/getIsUserManager/getIsUserManager';

export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export type { User, UserSchema } from './model/types/user';

export { userActions, userReducer } from './model/slice/userSlice';
