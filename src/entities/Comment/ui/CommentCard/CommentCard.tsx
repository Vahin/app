import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Text } from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { CommentType } from '../../model/types/comment';

interface CommentCardProps {
  className?: string;
  comment?: CommentType;
  isLoading: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} />
        </div>
        <Skeleton width="100%" height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
        {comment?.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
        <Text title={comment?.user.username} />
      </AppLink>
      <Text text={comment?.text} />
    </div>
  );
});
