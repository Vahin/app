import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'shared/ui/Popups/ui/Dropdown/Dropdown';
import { Listbox } from 'shared/ui/Popups/ui/Listbox/Listbox';
import { Page } from 'widjets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Главная')}
    </Page>
  );
};

export default MainPage;
