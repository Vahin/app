import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled' | 'cancel' | 'save';
export type ButtonSize = 'm' | 'l' | 'xl';
export type Padding = 'normal' | 'min';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  padding?: Padding;
  'data-testid'?: string;
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
    size = 'm',
    disabled,
    addonLeft,
    addonRight,
    padding = 'normal',
    'data-testid': dataTestid,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
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
      data-testid={dataTestid ?? 'Button'}
      {...otherProps}
    >
      {addonLeft && <div className={cls.addonLeftDiv}>{addonLeft}</div>}
      {children}
      {addonRight && <div className={cls.addonRightDiv}>{addonRight}</div>}
    </button>
  );
});
