import { memo } from 'react';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Code } from '@/shared/ui/redisigned/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <ToggleComponentFeatures
        feature='isAppRedisigned'
        on={
          <pre className={className}>
            <Code text={block.code} />
          </pre>
        }
        off={
          <pre className={className}>
            <CodeDeprecated text={block.code} />
          </pre>
        }
      />
    );
  },
);
