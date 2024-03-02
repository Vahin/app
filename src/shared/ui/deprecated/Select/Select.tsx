import { ChangeEvent, useCallback, useMemo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options: SelectOptions<T>[];
  value?: T;
  disabled?: boolean;
  onChange?: (value: T) => void;
}

/**
 * Устарел, используем новый компоненты.
 * @deprecated
 */
export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, value, disabled, onChange } = props;

  const mods: Mods = {};

  const optionsList = useMemo(
    () =>
      options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  const onChangeHandler = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event.target.value as T);
    },
    [onChange],
  );

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
};
