import { memo } from 'react';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';

export const ArticleDetaisSkeleton = memo(() => (
  <VStack gap='16' max align='stretch'>
    <VStack gap='8'>
      <HStack gap='8' align='center'>
        <Skeleton width={32} height={32} border='50%' />
        <Skeleton width={150} height={22} border='4px' />
      </HStack>
      <Skeleton width='70%' height={40} border='8px' />
    </VStack>
    <Skeleton width='100%' height={32} border='4px' />
    <Skeleton width='100%' height={420} border='4px' />
    <Skeleton width='20%' height={32} border='4px' />
    <VStack gap='4'>
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='97%' height={16} border='4px' />
      <Skeleton width='97%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='60%' height={16} border='4px' />
    </VStack>
    <Skeleton width='30%' height={32} border='4px' />
    <VStack gap='4'>
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='97%' height={16} border='4px' />
      <Skeleton width='97%' height={16} border='4px' />
      <Skeleton width='100%' height={16} border='4px' />
      <Skeleton width='60%' height={16} border='4px' />
    </VStack>
  </VStack>
));
