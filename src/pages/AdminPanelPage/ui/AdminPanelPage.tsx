import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widjets/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])}>
      <div />
    </Page>
  );
});

export default AdminPanelPage;
