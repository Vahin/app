import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton: FC = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const toggleError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  });

  return <Button onClick={toggleError}>{t('СЛОМАТЬ ВСЁ')}</Button>;
};
