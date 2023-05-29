import { Counter } from 'entities/Counter';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      {t('Главная')}
      <Counter />
    </div>
  );
};

export default MainPage;
