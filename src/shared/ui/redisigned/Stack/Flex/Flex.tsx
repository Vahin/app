import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexDirection = 'column' | 'row' | 'columReverse' | 'rowReverse';
const directionClasses: Record<FlexDirection, string> = {
  column: cls.column,
  columReverse: cls.columnReverse,
  row: cls.row,
  rowReverse: cls.rowReverse,
};

type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
  stretch: cls.alignStretch,
};

type FlexJustify = 'flexStart' | 'spaceBetween' | 'flexEnd' | 'center';
const justifyClasses: Record<FlexJustify, string> = {
  flexStart: cls.justifyStart,
  center: cls.justifyCenter,
  spaceBetween: cls.justifyBetween,
  flexEnd: cls.justifyEnd,
};

type FlexGap = '0' | '4' | '8' | '16' | '24' | '32';
const gapClasses: Record<FlexGap, string> = {
  0: cls.gap0,
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children?: ReactNode;
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  gap?: FlexGap;
  max?: boolean;
  wrap?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    direction = 'row',
    align = 'start',
    justify = 'flexStart',
    gap = '0',
    max = false,
    wrap,
    ...otherProps
  } = props;

  const additionals = [
    className,
    directionClasses[direction],
    alignClasses[align],
    justifyClasses[justify],
    gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
    [cls.wrap]: wrap,
  };

  return (
    <div className={classNames(cls.Flex, mods, additionals)} {...otherProps}>
      {children}
    </div>
  );
};
