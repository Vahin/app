import { SVGProps, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type IconVariant =
  | 'primary'
  | 'secondary'
  | 'primary-inverted'
  | 'secondary-inverted'
  | 'none';

const mapFillClass: Record<IconVariant, string> = {
  primary: 'fill-primary',
  secondary: 'fill-secondary',
  'primary-inverted': 'fill-primary-inverted',
  'secondary-inverted': 'fill-secondary-inverted',
  none: 'fill-none',
};

const mapStrokeClass: Record<IconVariant, string> = {
  primary: 'stroke-primary',
  secondary: 'stroke-secondary',
  'primary-inverted': 'stroke-primary-inverted',
  'secondary-inverted': 'stroke-secondary-inverted',
  none: 'stroke-none',
};

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  fillVariant?: IconVariant;
  strokeVariant?: IconVariant;
}

export const Icon = memo((props: IconProps) => {
  const {
    Svg,
    className,
    fillVariant = 'primary',
    strokeVariant = 'none',
    ...otherProps
  } = props;

  const additionals = [
    className,
    cls[mapFillClass[fillVariant]],
    cls[mapStrokeClass[strokeVariant]],
  ];

  return (
    <Svg className={classNames(cls.Icon, {}, additionals)} {...otherProps} />
  );
});
