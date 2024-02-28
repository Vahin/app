import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {
  isArticleRatingEnabled: false,
  isArticleRecomendationListEnabled: false,
  isAppRedisigned: false,
};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
};

export const getFeatureFlags = (flag: keyof FeatureFlags) => featureFlags[flag];
