import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { CurrencyType } from '../model/types/currencyType';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redisigned/Popups';

type CurrencyOptionType = {
  value: CurrencyType;
  content: CurrencyType;
};

const CurrencyOptions: CurrencyOptionType[] = [
  {
    value: 'RUB',
    content: 'RUB',
  },
  {
    value: 'EUR',
    content: 'EUR',
  },
  {
    value: 'USD',
    content: 'USD',
  },
];

interface CurrencySelectProps {
  className?: string;
  value?: CurrencyType;
  readonly?: boolean;
  onChange?: (value: CurrencyType) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const { className, value, readonly, onChange } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as CurrencyType);
    },
    [onChange],
  );

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Listbox
          className={classNames('', {}, [className])}
          items={CurrencyOptions}
          value={value}
          label='Валюта'
          onChange={onChangeHandler}
          defaultValue={t('Укажите валюту')}
          readonly={readonly}
        />
      }
      off={
        <ListboxDeprecated
          className={classNames('', {}, [className])}
          items={CurrencyOptions}
          value={value}
          onChange={onChangeHandler}
          defaultValue={t('Укажите валюту')}
          readonly={readonly}
        />
      }
    />
  );
});
