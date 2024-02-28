import { buildSelector } from '@/shared/lib/store';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const [useUserFeature, getUserFeatures] = buildSelector(
  (state) => state.user.authData?.features,
);

export const [useUserFeatureByKey] = buildSelector(
  (state, key: keyof FeatureFlags) => state.user.authData?.features?.[key],
);
