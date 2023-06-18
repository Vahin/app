import { SVGProps, VFC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type IconVariant = 'primary' | 'secondary';

type IconFilling = 'all' | 'fill' | 'stroke';

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>
  variant?: IconVariant
  filling?: IconFilling
}

export const Icon = memo((props: IconProps) => {
  const {
    Svg,
    className,
    variant = 'primary',
    filling = 'fill',
  } = props;

  return (
    <Svg className={classNames(cls.Icon, {}, [className, cls[variant], cls[filling]])} />
  );
});
