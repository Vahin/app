import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Listbox } from '@/shared/ui/redisigned/Popups';
import { useUserFeatureByKey, updateFeatureFlags } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface UiDesignSwitcherProps {
  className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
  const { t } = useTranslation();
  const { className } = props;

  const isAppRedisigned = useUserFeatureByKey('isAppRedisigned');
  const dispatch = useAppDispatch();

  const items = [
    {
      content: t('Новый'),
      value: 'new',
    },
    {
      content: t('Старый'),
      value: 'old',
    },
  ];

  const onChange = (value: string) => {
    dispatch(updateFeatureFlags({ isAppRedisigned: value === 'new' }));
  };

  return (
    <Listbox
      value={isAppRedisigned ? 'new' : 'old'}
      items={items}
      label={t('Вариант интерфейса')}
      onChange={onChange}
      className={classNames('', {}, [className])}
    />
  );
});
