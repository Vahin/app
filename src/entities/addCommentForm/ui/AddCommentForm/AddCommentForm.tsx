import { ToggleComponentFeatures } from '@/shared/lib/features';
import { AddCommentFormRedisigned } from '../AddCommentFormRedisigned/AddCommentFormRedisigned';
import { AddCommentFormDeprecated } from '../AddCommentFormDeprecated/AddCommentFormDeprecated';
import { AddCommentFormProps } from '../../types/AddCommentFormProps';

export const AddCommentForm = (props: AddCommentFormProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<AddCommentFormRedisigned {...props} />}
    off={<AddCommentFormDeprecated {...props} />}
  />
);
