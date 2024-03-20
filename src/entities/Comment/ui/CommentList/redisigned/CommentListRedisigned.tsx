import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../../CommentCard/CommentCard';
import { Text } from '@/shared/ui/redisigned/Text';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { CommentListProps } from '../../../types/CommentListProps';

export const CommentListRedisigned = memo((props: CommentListProps) => {
  const { t } = useTranslation();
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <VStack className={className} gap='16' max>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack className={className} gap='16' max>
      {comments?.length ? (
        comments
          .reverse()
          .map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              isLoading={isLoading}
            />
          ))
      ) : (
        <HStack justify='center' max>
          <Text text={t('Комментариев нет')} />
        </HStack>
      )}
    </VStack>
  );
});
