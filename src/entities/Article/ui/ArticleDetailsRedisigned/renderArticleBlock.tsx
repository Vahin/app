import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

export const renderArticleBlock = (block: ArticleBlock) => {
  switch (block.type) {
    case ArticleBlockType.TEXT:
      return <ArticleTextBlockComponent block={block} key={block.id} />;
    case ArticleBlockType.CODE:
      return <ArticleCodeBlockComponent block={block} key={block.id} />;
    case ArticleBlockType.IMAGE:
      return <ArticleImageBlockComponent block={block} key={block.id} />;
    default:
      return null;
  }
};
