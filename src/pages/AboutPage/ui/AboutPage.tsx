import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widjets/Page';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page>{t('О сайте')}</Page>;
};

export default AboutPage;
