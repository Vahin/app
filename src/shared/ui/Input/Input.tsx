import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number,
  onChange?: (value: string) => void
  type?: string
  autofocus?: boolean
  readOnly?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    autofocus,
    readOnly = false,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  };

  return (
    <div className={classNames(cls.inputWrapper, mods, [className])}>
      <input
        ref={ref}
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readOnly}
        {...otherProps}
      />
    </div>
  );
});
