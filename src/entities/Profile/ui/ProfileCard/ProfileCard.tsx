import { memo } from 'react';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { ProfileCardRedisigned } from '../ProfileCardRedisigned/ProfileCardRedisigned';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardProps } from '../../types/ProfileCardProps';

export const ProfileCard = memo((props: ProfileCardProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<ProfileCardRedisigned {...props} />}
    off={<ProfileCardDeprecated {...props} />}
  />
));
