import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';

export type ButtonSize = 'm' | 'l' | 'xl';
export type Padding = 'normal' | 'min';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  padding?: Padding;
}

const mapPaddingClass: Record<Padding, string> = {
  normal: 'padding-standart',
  min: 'padding-min',
};

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    addonLeft,
    addonRight,
    padding = 'normal',
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };

  const additional = [
    className,
    cls[variant],
    cls[size],
    cls[mapPaddingClass[padding]],
  ];

  return (
    <button
      type='button'
      className={classNames(cls.Button, mods, additional)}
      disabled={disabled}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </button>
  );
});
