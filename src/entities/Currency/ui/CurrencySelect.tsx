import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { CurrencyType } from '../model/types/currencyType';

type CurrencyOptionType = {
  value: CurrencyType
  content: CurrencyType
}

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
  className?: string
  value?: CurrencyType
  readonly?: boolean
  onChange?: (value: CurrencyType) => void
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation();
  const {
    className,
    value,
    readonly,
    onChange,
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CurrencyType);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Валюта')}
      options={CurrencyOptions}
      value={value}
      onChange={onChangeHandler}
      disabled={readonly}
    />
  );
});
