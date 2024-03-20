import { memo } from 'react';
import { CommentCardProps } from '../../types/CommentCardProps';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { CommentCardRedisigned } from './redisigned/CommentCardRedisigned';
import { CommentCardDeprecated } from './deprecated/CommentCardDeprecated';

export const CommentCard = memo((props: CommentCardProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<CommentCardRedisigned {...props} />}
    off={<CommentCardDeprecated {...props} />}
  />
));
