import { memo } from 'react';
import { CommentCardProps } from '../../../types/CommentCardProps';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { AppLink } from '@/shared/ui/redisigned/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { Text } from '@/shared/ui/redisigned/Text';

export const CommentCardRedisigned = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading || !comment) {
    return (
      <HStack
        data-testid='CommentCard.Content'
        className={className}
        gap='16'
        max
      >
        <Skeleton width={32} height={32} border='50%' />
        <VStack max gap='4'>
          <Skeleton height={21} width='100%' border='4px' />
          <Skeleton height={21} width='100%' border='4px' />
          <Skeleton height={21} width='100%' border='4px' />
        </VStack>
      </HStack>
    );
  }

  return (
    <HStack
      data-testid='CommentCard.Content'
      className={className}
      gap='16'
      max
    >
      <AppLink to={getRouteProfile(comment.user.id)}>
        <Avatar size={32} src={comment.user.avatar} />
      </AppLink>
      <Text text={comment.text} />
    </HStack>
  );
});
