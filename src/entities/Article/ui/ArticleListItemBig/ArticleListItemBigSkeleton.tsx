import { memo } from 'react';
import { Card } from '@/shared/ui/redisigned/Card';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';

export const ArticleListItemBigSkeleton = memo(() => (
  <Card padding='24' data-testid='ArticlesListItem'>
    <VStack gap='16' max>
      <VStack gap='8' max>
        <HStack gap='4' align='center' max>
          <Skeleton width={32} height={32} border='50%' />
          <Skeleton width={152} height={24} border='32px' />
        </HStack>
        <Skeleton width='100%' height={38} border='8px' />
        <Skeleton width='90%' height={38} border='8px' />
      </VStack>
      <Skeleton width='70%' height={27} border='8px' />
      <Skeleton width='100%' height={420} border='16px' />
      <VStack gap='4' max>
        <Skeleton width='90%' height={17} border='4px' />
        <Skeleton width='85%' height={17} border='4px' />
        <Skeleton width='95%' height={17} border='4px' />
      </VStack>
      <HStack justify='flexEnd' max align='center'>
        <Skeleton width={56} height={23} border='22px' />
      </HStack>
    </VStack>
  </Card>
));
