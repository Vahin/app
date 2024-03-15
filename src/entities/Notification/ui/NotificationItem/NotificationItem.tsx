import { memo } from 'react';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { NotificationItemProps } from '../../types/NotificationItemProps';
import { NotificationItemRedisigned } from './NotificationItemRedisigned/NotificationItemRedisigned';
import { NotificationItemDeprecated } from './NotificationItemDeprecated/NotificationItemDeprecated';

export const NotificationItem = memo((props: NotificationItemProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<NotificationItemRedisigned {...props} />}
    off={<NotificationItemDeprecated {...props} />}
  />
));
