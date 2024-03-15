import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redisigned/Card';
import cls from './ArticleListItemSmall.module.scss';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';

interface ArticleListItemSmallSkeletonProps {
  className?: string;
}

export const ArticleListItemSmallSkeleton = memo(
  (props: ArticleListItemSmallSkeletonProps) => {
    const { className } = props;

    return (
      <Card
        padding='0'
        border='medium'
        className={classNames(cls.ArticlesListItem, {}, [className])}
        data-testid='ArticlesListItem'
      >
        <div className={cls.imageWrapper}>
          <Skeleton width='100%' height='100%' className={cls.imagePosition} />
        </div>

        <VStack gap='8' max className={cls.content}>
          <Skeleton width='100%' height={28} border='4px' />
          <Skeleton width='80%' height={28} border='4px' />
          <Skeleton width='90%' height={28} border='4px' />
          <HStack justify='spaceBetween' max align='center'>
            <Skeleton width='30%' height={20} border='4px' />
            <Skeleton width='25%' height={20} border='4px' />
          </HStack>
          <HStack gap='4' align='center' className={cls.userInfo} max>
            <Skeleton width={32} height={32} border='50%' />
            <Skeleton width='40%' height={20} border='4px' />
          </HStack>
        </VStack>
      </Card>
    );
  },
);
