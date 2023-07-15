import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Listbox } from 'shared/ui/Listbox/Listbox';
import { CountryType } from '../model/types/country';

type CountryOptionType = {
  value: CountryType
  content: CountryType
}

const CountryOptions: CountryOptionType[] = [
  {
    content: 'Armenia',
    value: 'Armenia',
  },
  {
    content: 'Belarus',
    value: 'Belarus',
  },
  {
    content: 'Kazakhstan',
    value: 'Kazakhstan',
  },
  {
    content: 'Russia',
    value: 'Russia',
  },
  {
    content: 'Ukraine',
    value: 'Ukraine',
  },
];

interface CountrySelectProps {
  className?: string;
  value?: CountryType
  readonly?: boolean
  onChange?: (country: CountryType) => void
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { t } = useTranslation();
  const {
    className,
    value,
    readonly,
    onChange,
  } = props;

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CountryType);
  }, [onChange]);

  return (
    <Listbox
      className={classNames('', {}, [className])}
      items={CountryOptions}
      value={value}
      onChange={onChangeHandler}
      defaultValue={t('Укажите страну')}
      readonly={readonly}
    />
  );
});
