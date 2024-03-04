import { SVGProps, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  'data-testid'?: string;
}

interface DefaultIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClicableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = DefaultIconProps | ClicableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    Svg,
    className,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      height={height}
      width={width}
      data-testid={props['data-testid']}
      {...otherProps}
    />
  );

  if (clickable) {
    return (
      <button
        type='button'
        className={cls.button}
        onClick={props.onClick}
        style={{ height, width }}
        data-testid={props['data-testid']}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
