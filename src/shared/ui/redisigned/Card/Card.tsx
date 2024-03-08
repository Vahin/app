import { HTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';

export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  max?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'padding-0',
  '8': 'padding-8',
  '16': 'padding-16',
  '24': 'padding-24',
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    ...otherProps
  } = props;

  const additional = [className, cls[variant], mapPaddingToClass[padding]];
  const mods: Mods = {
    [cls.max]: max,
  };

  return (
    <div className={classNames(cls.Card, mods, additional)} {...otherProps}>
      {children}
    </div>
  );
});
