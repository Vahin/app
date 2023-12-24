import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widjets/Page';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      { t('ARTICLE EDIT PAGE')}
    </Page>
  );
});

export default ArticleEditPage;
