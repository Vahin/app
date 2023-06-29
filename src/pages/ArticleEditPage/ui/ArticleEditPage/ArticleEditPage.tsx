import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widjets/Page';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
      { t('ARTICLE EDIT PAGE')}
    </Page>
  );
});

export default ArticleEditPage;
