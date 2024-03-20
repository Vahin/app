import { ToggleComponentFeatures } from '@/shared/lib/features';
import { EditableProfileCardHeaderRedisigned } from './redisigned/EditableProfileCardHeaderRedisigned';
import { EditableProfileCardHeaderDeprecated } from './deprecated/EditableProfileCardHeaderDeprecated';
import { EditableProfileCardHeaderProps } from '../../types/EditableProfileCardHeaderProps';

export const EditableProfileCardHeader = (
  props: EditableProfileCardHeaderProps,
) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<EditableProfileCardHeaderRedisigned {...props} />}
    off={<EditableProfileCardHeaderDeprecated {...props} />}
  />
);
