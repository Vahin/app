import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export type TextVariant = 'primary' | 'error' | 'accent';

type TextAlign = 'center' | 'left' | 'right';

type TextSize = 's' | 'm' | 'l';

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  divider?: boolean;
  noWrap?: boolean;
  'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    text,
    variant = 'primary',
    align = 'left',
    size = 'm',
    divider,
    noWrap,
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const additional = [className, cls[variant], cls[align], cls[size]];

  return (
    <div className={classNames(cls.Text, { [cls.nowrap]: noWrap }, additional)}>
      {title && (
        <HeaderTag
          className={classNames(cls.title, { [cls.nowrap]: noWrap })}
          data-testid={`${dataTestId}.Header`}
        >
          {title}
        </HeaderTag>
      )}
      {text && (
        <p
          className={classNames(cls.text, { [cls.nowrap]: noWrap })}
          data-testid={`${dataTestId}.Paragraph`}
        >
          {text}
          {divider && ':'}
        </p>
      )}
    </div>
  );
});
