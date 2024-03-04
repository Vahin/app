import { ReactElement } from 'react';
import { FeatureFlags } from '../../types/featureFlags';
// eslint-disable-next-line
import { useUserFeatureByKey } from '@/entities/User';

interface ToggleComponentFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleComponentFeatures = (
  props: ToggleComponentFeaturesProps,
) => {
  const { feature, on, off } = props;
  const featureFlag = useUserFeatureByKey(feature);

  if (featureFlag) {
    return on;
  }

  return off;
};
