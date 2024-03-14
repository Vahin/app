import { HTMLAttributes, ReactNode, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '4' | '8' | '12' | '16' | '20' | '24';
export type CardBorder = 'round' | 'normal';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  paddingH?: CardPadding;
  paddingV?: CardPadding;
  border?: CardBorder;
  inlineBlock?: boolean;
}

const mapPaddingHToClass: Record<CardPadding, string> = {
  '0': 'paddingH-0',
  '4': 'paddingH-4',
  '8': 'paddingH-8',
  '12': 'paddingH-12',
  '16': 'paddingH-16',
  '20': 'paddingH-20',
  '24': 'paddingH-24',
};

const mapPaddingVToClass: Record<CardPadding, string> = {
  '0': 'paddingV-0',
  '4': 'paddingV-4',
  '8': 'paddingV-8',
  '12': 'paddingV-12',
  '16': 'paddingV-16',
  '20': 'paddingV-20',
  '24': 'paddingV-24',
};

const mapBorderToClass: Record<CardBorder, string> = {
  normal: 'border-normal',
  round: 'border-round',
};

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    variant = 'normal',
    padding,
    paddingH = '8',
    paddingV = '8',
    border = 'normal',
    inlineBlock,
    ...otherProps
  } = props;

  const borderClass = cls[mapBorderToClass[border]];
  const paddingHClass = padding
    ? cls[mapPaddingHToClass[padding]]
    : cls[mapPaddingHToClass[paddingH]];
  const paddingVClass = padding
    ? cls[mapPaddingVToClass[padding]]
    : cls[mapPaddingVToClass[paddingV]];

  const mods: Mods = {
    [cls.inlineBlock]: inlineBlock,
  };

  const additional = [
    className,
    cls[variant],
    paddingHClass,
    paddingVClass,
    borderClass,
  ];

  return (
    <div
      className={classNames(cls.Card, mods, additional)}
      data-testid='Card'
      {...otherProps}
    >
      {children}
    </div>
  );
});
