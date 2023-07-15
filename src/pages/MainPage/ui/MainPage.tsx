import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { Page } from 'widjets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Главная')}
      <Listbox
        defaultValue={t('Выберите значение')}
        onChange={() => {}}
        value={undefined}
        items={[
          { value: '1', content: '123' },
          { value: '2', content: '3232321' },
          { value: '3', content: '213' },
          { value: '4', content: '231' },
        ]}
      />
    </Page>
  );
};

export default MainPage;
