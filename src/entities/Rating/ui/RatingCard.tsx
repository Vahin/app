import { ToggleComponentFeatures } from '@/shared/lib/features';
import { RatingCardRedisigned } from './RatingCardRedisigned';
import { RatingCardDeprecated } from './RatingCardDeprecated';
import { RatingCardProps } from '../types/RatingCardProps';

export const RatingCard = (props: RatingCardProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<RatingCardRedisigned {...props} />}
    off={<RatingCardDeprecated {...props} />}
  />
);
