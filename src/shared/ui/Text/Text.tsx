import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  INVERTED = 'inverted',
  ERROR = 'error'
}

type TextAlign = 'center' | 'left' | 'right';

type TextSize = 'sm' | 'md' | 'lg';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.DEFAULT,
    align = 'left',
    size = 'md',
  } = props;

  const additional = [className, cls[theme], cls[align], cls[size]];

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
