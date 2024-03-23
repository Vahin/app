import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redisigned/Text';
import { AppimageWrapper } from '@/shared/ui/redisigned/AppimageWrapper';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
      <ToggleComponentFeatures
        feature='isAppRedisigned'
        on={
          <>
            <AppimageWrapper src={block.src} alt={block.title} />
            {block.title && <Text text={block.title} align='center' />}
          </>
        }
        off={
          <div
            className={classNames(cls.ArticleImageBlockComponent, {}, [
              className,
            ])}
          >
            <img src={block.src} alt={block.title} className={cls.img} />
            {block.title && (
              <TextDeprecated text={block.title} align='center' />
            )}
          </div>
        }
      />
    );
  },
);
