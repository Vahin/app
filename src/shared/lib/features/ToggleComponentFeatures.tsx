import { ReactElement } from 'react';
import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface ToggleComponentFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleComponentFeatures = (
  props: ToggleComponentFeaturesProps,
) => {
  const { feature, on, off } = props;

  if (getFeatureFlags(feature)) {
    return on;
  }

  return off;
};
