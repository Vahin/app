import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  DEFAULT = 'default',
  INVERTED = 'inverted',
  ERROR = 'error',
}

type TextAlign = 'center' | 'left' | 'right';

type TextSize = 'sm' | 'md' | 'lg';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  sm: 'h3',
  md: 'h2',
  lg: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.DEFAULT,
    align = 'left',
    size = 'md',
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const additional = [className, cls[theme], cls[align], cls[size]];

  return (
    <div className={classNames(cls.Text, {}, additional)}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
});
