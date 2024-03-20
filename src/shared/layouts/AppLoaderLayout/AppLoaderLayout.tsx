import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => (
  <MainLayout
    content={
      <VStack max gap='24'>
        <Skeleton width='100%' height={40} border='20px' />
        <Skeleton width='100%' height={240} border='20px' />
        <Skeleton width='100%' height={40} border='20px' />
        <Skeleton />
      </VStack>
    }
    sidebar={<Skeleton width={220} height='100%' border='32px' />}
    header={
      <HStack gap='16' className={cls.header} align='center'>
        <Skeleton width={32} height={32} border='10px' />
        <Skeleton width={32} height={32} border='10px' />
        <Skeleton width={48} height={48} border='100%' />
      </HStack>
    }
  />
));
