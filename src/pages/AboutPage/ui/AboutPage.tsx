import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widjets/Page';

const AboutPage: FC = () => {
  const { t } = useTranslation('about');

  return <Page data-testid='AboutPage'>{t('О сайте')}</Page>;
};

export default AboutPage;
