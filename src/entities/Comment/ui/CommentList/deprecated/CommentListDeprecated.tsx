import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './CommentListDeprecated.module.scss';
import { CommentCard } from '../../CommentCard/CommentCard';
import { CommentListProps } from '../../../types/CommentListProps';

export const CommentListDeprecated = memo((props: CommentListProps) => {
  const { t } = useTranslation();
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </div>
  );
});
