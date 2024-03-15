import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Card } from '@/shared/ui/redisigned/Card';
import { Text } from '@/shared/ui/redisigned/Text';
import { NotificationItemProps } from '../../../types/NotificationItemProps';
import { AppLink } from '@/shared/ui/redisigned/AppLink';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';

export const NotificationItemRedisigned = memo(
  (props: NotificationItemProps) => {
    const { className, item, isLoading } = props;

    if (isLoading || !item) {
      return (
        <Card className={classNames('', {}, [className])} padding='0'>
          <VStack gap='8' max>
            <Skeleton height='16px' width='70%' />
            <VStack gap='4' max>
              <Skeleton height='12px' width='100%' />
              <Skeleton height='12px' width='80%' />
              <Skeleton height='12px' width='95%' />
            </VStack>
          </VStack>
        </Card>
      );
    }

    const content = (
      <Card className={classNames('', {}, [className])} padding='0'>
        <Text title={item.title} text={item.description} size='s' />
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
