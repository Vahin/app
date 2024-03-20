import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { CommentCardProps } from '../../../types/CommentCardProps';

export const CommentCardDeprecated = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading || !comment) {
    return (
      <div
        data-testid='CommentCard.Loading'
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width='100%' height={50} />
      </div>
    );
  }

  return (
    <div
      data-testid='CommentCard.Content'
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
});
