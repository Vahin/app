import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Notification } from '../../model/types/Notifications';

interface NotificationItemProps {
  className?: string;
  item?: Notification;
  isLoading?: boolean;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item, isLoading } = props;

  if (isLoading || !item) {
    return (
      <Card className={classNames('', {}, [className])} padding='0'>
        <VStack gap='8'>
          <Skeleton height='16px' width='100px' />
          <VStack gap='4'>
            <Skeleton height='12px' width='300px' />
            <Skeleton height='12px' width='200px' />
            <Skeleton height='12px' width='200px' />
          </VStack>
        </VStack>
      </Card>
    );
  }

  const content = (
    <Card className={classNames('', {}, [className])} padding='0'>
      <Text title={item.title} text={item.description} size='sm' />
    </Card>
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
