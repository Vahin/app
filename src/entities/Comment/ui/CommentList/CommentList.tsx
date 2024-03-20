import { memo } from 'react';
import { CommentListDeprecated } from './deprecated/CommentListDeprecated';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { CommentListRedisigned } from './redisigned/CommentListRedisigned';
import { CommentListProps } from '../../types/CommentListProps';

export const CommentList = memo((props: CommentListProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<CommentListRedisigned {...props} />}
    off={<CommentListDeprecated {...props} />}
  />
));
