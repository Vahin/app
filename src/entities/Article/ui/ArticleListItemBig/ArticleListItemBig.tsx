import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemBig.module.scss';
import { Card } from '@/shared/ui/redisigned/Card';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { Text } from '@/shared/ui/redisigned/Text';
import { Skeleton } from '@/shared/ui/redisigned/Skeleton';
import { AppLink } from '@/shared/ui/redisigned/AppLink';
import { getRouteArticleDetails } from '@/shared/const/router';
import { ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType } from '../../model/consts/consts';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { Icon } from '@/shared/ui/redisigned/Icon';
import EyeIcon from '@/shared/assets/icons/eye-redisigned.svg';
import { Button } from '@/shared/ui/redisigned/Button';
import { ArticleListItemProps } from '../../types/ArticleListItemProps';
import { AppimageWrapper } from '@/shared/ui/redisigned/AppimageWrapper';

export const ArticleListItemBig = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation();
  const { className, article, target } = props;

  const textBlock = article.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT,
  ) as ArticleTextBlock;

  return (
    <Card
      padding='24'
      className={classNames('', {}, [className])}
      data-testid='ArticlesListItem'
    >
      <VStack gap='16' max>
        <HStack gap='8' align='center'>
          <Avatar size={32} src={article.user.avatar} />
          <Text bold text={article.user.username} />
          <Text text={article.createdAt} />
        </HStack>
        <Text title={article.title} size='l' bold />
        <Text title={article.subtitle} />
        <AppimageWrapper
          fallback={<Skeleton width='100%' height={250} />}
          width='full'
          src={article.img}
          alt={article.title}
        />
        {textBlock?.paragraphs && (
          <Text
            className={cls.paragraph}
            text={textBlock.paragraphs.slice(0, 2).join(' ')}
          />
        )}
        <HStack justify='spaceBetween' max align='center'>
          <AppLink target={target} to={getRouteArticleDetails(article.id)}>
            <Button>{t('Читать далее...')}</Button>
          </AppLink>
          <HStack gap='8' align='center'>
            <Icon Svg={EyeIcon} className={cls.icon} />
            <Text text={String(article.views)} />
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );
});
