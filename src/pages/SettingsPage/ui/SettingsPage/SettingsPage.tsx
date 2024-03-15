import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Text } from '@/shared/ui/redisigned/Text';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <VStack gap='16' className={classNames('', {}, [className])}>
      <Text title={t('Настройки пользователя:')} />
      <UiDesignSwitcher />
    </VStack>
  );
});

export default SettingsPage;
