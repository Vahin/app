import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widjets/Page';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return <Page data-testid='MainPage'>{t('Главная')}</Page>;
};

export default MainPage;
