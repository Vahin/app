import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined';

type CardPadding = '0' | '4' | '8' | '16';

const mapPaddingClass: Record<CardPadding, string> = {
  0: 'padding-0',
  4: 'padding-4',
  8: 'padding-8',
  16: 'padding-16',
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  padding?: CardPadding;
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = 'normal',
    padding = '16',
    ...otherProps
  } = props;

  const additional = [className, cls[theme], cls[mapPaddingClass[padding]]];

  return (
    <div className={classNames(cls.Card, {}, additional)} {...otherProps}>
      {children}
    </div>
  );
});
