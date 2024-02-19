import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { useNotifications } from '../../api/notoficationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationsListProps {
  className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VStack
        gap='4'
        max
        align='stretch'
        className={classNames('', {}, [className])}
      >
        <NotificationItem isLoading={isLoading} />
        <NotificationItem isLoading={isLoading} />
        <NotificationItem isLoading={isLoading} />
      </VStack>
    );
  }

  return (
    <VStack
      gap='4'
      max
      align='stretch'
      className={classNames('', {}, [className])}
    >
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VStack>
  );
});
