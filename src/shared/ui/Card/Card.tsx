import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardTheme = 'normal' | 'outlined'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode
  theme?: CardTheme
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = 'normal',
    ...otherProps
  } = props;

  return (
    <div className={classNames(cls.Card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
});
