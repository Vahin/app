import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticlesListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view = ArticleView.SMALL,
  } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton className={cls.username} width={40} height={16} border="5px" />
            <Skeleton className={cls.date} width={40} height={16} border="5px" />
          </div>
          <Skeleton width="50%" height={20} border="5px" />
          <Skeleton width="60%" height={16} border="5px" />
          <Skeleton className={cls.img} width="100%" height={300} border="10px" />
          <Skeleton className={cls.textBlock} width="100%" height={200} border="10px" />
          <div className={cls.footer}>
            <Skeleton width={80} height={16} border="10[x" />
            <Skeleton width={40} height={16} border="10px" className={cls.views} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <Skeleton width={200} height={200} border="10px" />
        <Skeleton className={cls.title} width="100%" height={20} border="5px" />
        <Skeleton className={cls.title} width="100%" height={16} border="5px" />
      </Card>
    </div>
  );
});
