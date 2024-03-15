import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { NotificationItemProps } from '../../../types/NotificationItemProps';

export const NotificationItemDeprecated = memo(
  (props: NotificationItemProps) => {
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
  },
);
