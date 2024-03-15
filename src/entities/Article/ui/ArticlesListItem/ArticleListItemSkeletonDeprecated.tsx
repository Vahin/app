import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { ArticleView } from '../../model/consts/consts';
import cls from './ArticlesListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view?: ArticleView;
}

/**
 * @deprecated
 */
export const ArticleListItemSkeletonDeprecated = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view = ArticleView.SMALL } = props;

    if (view === ArticleView.BIG) {
      return (
        <div
          className={classNames(cls.ArticlesListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <CardDeprecated className={cls.card}>
            <div className={cls.header}>
              <SkeletonDeprecated width={30} height={30} border='50%' />
              <SkeletonDeprecated
                className={cls.username}
                width={40}
                height={16}
                border='5px'
              />
              <SkeletonDeprecated
                className={cls.date}
                width={40}
                height={16}
                border='5px'
              />
            </div>
            <SkeletonDeprecated width='50%' height={20} border='5px' />
            <SkeletonDeprecated width='60%' height={16} border='5px' />
            <SkeletonDeprecated
              className={cls.img}
              width='100%'
              height={300}
              border='10px'
            />
            <SkeletonDeprecated
              className={cls.textBlock}
              width='100%'
              height={200}
              border='10px'
            />
            <div className={cls.footer}>
              <SkeletonDeprecated width={80} height={16} border='10[x' />
              <SkeletonDeprecated
                width={40}
                height={16}
                border='10px'
                className={cls.views}
              />
            </div>
          </CardDeprecated>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
      >
        <CardDeprecated className={cls.card}>
          <SkeletonDeprecated width={200} height={200} border='10px' />
          <SkeletonDeprecated
            className={cls.title}
            width='100%'
            height={20}
            border='5px'
          />
          <SkeletonDeprecated
            className={cls.title}
            width='100%'
            height={16}
            border='5px'
          />
        </CardDeprecated>
      </div>
    );
  },
);
