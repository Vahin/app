import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph) => (
          <Text text={paragraph} key={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  },
);
