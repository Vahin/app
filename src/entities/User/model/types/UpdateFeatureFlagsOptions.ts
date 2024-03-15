import { FeatureFlags } from '@/shared/types/featureFlags';

export interface UpdateFeatureFlagsOptions {
  userId: string;
  newFeatures: Partial<FeatureFlags>;
}
