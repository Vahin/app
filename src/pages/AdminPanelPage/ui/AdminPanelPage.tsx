import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widjets/Page';

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <Page className={classNames('', {}, [className])} data-testid="AdminPanelPage">
      <div />
    </Page>
  );
});

export default AdminPanelPage;
