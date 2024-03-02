import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';
import cls from './ArticlesListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import EyeIcon from '../../assets/icons/eye.svg';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { getRouteArticleDetails } from '@/shared/const/router';
import { Appimage } from '@/shared/ui/deprecated/Appimage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticlesListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticlesListItem = memo((props: ArticlesListItemProps) => {
  const { t } = useTranslation();
  const { className, article, view = ArticleView.SMALL, target } = props;

  const articleTypes = (
    <Text text={article.type.join(', ')} className={cls.types} />
  );
  const articleViews = (
    <>
      <Text text={String(article.views)} className={cls.views} />
      <Icon Svg={EyeIcon} className={cls.icon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div
        className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
        data-testid='ArticlesListItem'
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text className={cls.username} text={article.user.username} />
            <Text className={cls.date} text={article.createdAt} />
          </div>
          <Text title={article.title} className={cls.title} />
          {articleTypes}
          <Appimage
            fallback={<Skeleton width='100%' height={250} />}
            src={article.img}
            alt={article.title}
            className={cls.img}
          />
          {textBlock && (
            <ArticleTextBlockComponent
              block={textBlock}
              className={cls.textBlock}
            />
          )}
          <div className={cls.footer}>
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
              {t('Читать далее')}
            </AppLink>
            {articleViews}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.ArticlesListItem, {}, [className, cls[view]])}
      data-testid='ArticlesListItem'
    >
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Appimage
            fallback={<Skeleton width={200} height={200} />}
            src={article.img}
            className={cls.image}
            alt={article.title}
          />
          <Text text={article.createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {articleTypes}
          {articleViews}
        </div>
        <Text text={article.title} className={cls.title} />
        <AppLink
          target={target}
          to={getRouteArticleDetails(article.id)}
          className={cls.link}
        />
      </Card>
    </div>
  );
});
