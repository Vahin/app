import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemSmall.module.scss';
import { Card } from '@/shared/ui/redisigned/Card';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { ArticleListItemProps } from '../../types/ArticleListItemProps';
import { Text } from '@/shared/ui/redisigned/Text';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { Icon } from '@/shared/ui/redisigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye-redisigned.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppLink } from '@/shared/ui/redisigned/AppLink';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { AppimageWrapper } from '@/shared/ui/redisigned/AppimageWrapper';

export const ArticleListItemSmall = memo((props: ArticleListItemProps) => {
  const { className, article, target } = props;

  return (
    <Card
      padding='0'
      border='medium'
      className={classNames(cls.ArticlesListItem, {}, [className])}
      data-testid='ArticlesListItem'
    >
      <AppimageWrapper
        fallback={
          <Skeleton width='100%' height='100%' className={cls.position} />
        }
        errorFallback={
          <Skeleton width='100%' height='100%' className={cls.position} />
        }
        ratio='horizontal-wide'
        src={article.img}
        alt={article.title}
      />

      <VStack gap='8' max className={cls.content}>
        <Text title={article.title} className={cls.title} size='m' />
        <HStack justify='spaceBetween' max align='center'>
          <Text text={article.createdAt} className={cls.date} />

          <HStack gap='8' align='center' justify='center'>
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
          </HStack>
        </HStack>
        <AppLink
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={cls.link}
        />
        <HStack gap='4' align='center' className={cls.userInfo}>
          <Avatar size={32} src={article.user?.avatar} />
          <Text text={article.user?.username} bold />
        </HStack>
      </VStack>
    </Card>
  );
});
