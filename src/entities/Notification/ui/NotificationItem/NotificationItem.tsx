import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Notification } from '../../model/types/Notifications';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redisigned/Card';
import { Text } from '@/shared/ui/redisigned/Text';

interface NotificationItemProps {
  className?: string;
  item?: Notification;
  isLoading?: boolean;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item, isLoading } = props;

  if (isLoading || !item) {
    return (
      <CardDeprecated className={classNames('', {}, [className])} padding='0'>
        <VStack gap='8'>
          <Skeleton height='16px' width='100px' />
          <VStack gap='4'>
            <Skeleton height='12px' width='300px' />
            <Skeleton height='12px' width='200px' />
            <Skeleton height='12px' width='200px' />
          </VStack>
        </VStack>
      </CardDeprecated>
    );
  }

  const content = (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Card className={classNames('', {}, [className])} padding='0'>
          <Text title={item.title} text={item.description} size='s' />
        </Card>
      }
      off={
        <CardDeprecated className={classNames('', {}, [className])} padding='0'>
          <TextDeprecated
            title={item.title}
            text={item.description}
            size='sm'
          />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <AppLink target='_blank' to={item.href}>
        {content}
      </AppLink>
    );
  }

  return content;
});
