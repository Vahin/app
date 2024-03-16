import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Text } from '@/shared/ui/redisigned/Text';
import { VStack } from '@/shared/ui/redisigned/Stack';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <ToggleComponentFeatures
        feature='isAppRedisigned'
        on={
          <VStack max gap='8' className={className}>
            {block.title && <Text title={block.title} />}
            {block.paragraphs.map((paragraph) => (
              <Text text={paragraph} key={paragraph} />
            ))}
          </VStack>
        }
        off={
          <div
            className={classNames(cls.ArticleTextBlockComponent, {}, [
              className,
            ])}
          >
            {block.title && (
              <TextDeprecated title={block.title} className={cls.title} />
            )}
            {block.paragraphs.map((paragraph) => (
              <TextDeprecated
                text={paragraph}
                key={paragraph}
                className={cls.paragraph}
              />
            ))}
          </div>
        }
      />
    );
  },
);
