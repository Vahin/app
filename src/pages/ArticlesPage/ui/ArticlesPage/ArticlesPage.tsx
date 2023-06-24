import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticlesList } from 'entities/Article';
import { mockedArticles } from 'shared/mockedData/mockedArticles/mockedArticles';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const articles = mockedArticles as Article[];

const ArticlesPage = memo((props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticlesList articles={new Array(16).fill(0).map((item, index) => ({
        ...articles[0],
        id: String(index + 1),
      }))}
      />
    </div>
  );
});

export default memo(ArticlesPage);
