import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redisigned/Text';

export const ArticleDetailsError = memo(() => {
  const { t } = useTranslation();

  return (
    <Text
      align='center'
      variant='error'
      title={t('Произошла ошибка при загрузке статьи')}
    />
  );
});
