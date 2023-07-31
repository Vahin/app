import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widjets/Page';

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      {
        t('У вас нет доступа к этой странице')
      }
    </Page>
  );
});

export default ForbiddenPage;
