import { Mods, classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  memo, useCallback, useMemo,
} from 'react';
import cls from './Select.module.scss';

interface SelectOptions {
  value: string
  content: string
}

interface SelectProps {
  className?: string;
  label?: string
  options: SelectOptions[]
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    disabled,
    onChange,
  } = props;

  const mods: Mods = {};

  const optionsList = useMemo(() => options.map((opt) => (
    <option value={opt.value} key={opt.value}>{opt.content}</option>
  )), [options]);

  const onChangeHandler = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value);
  }, [onChange]);

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      <span className={cls.label}>{label}</span>
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={disabled}
      >
        {optionsList}
      </select>
    </div>
  );
});
