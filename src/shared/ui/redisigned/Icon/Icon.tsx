import { SVGProps, FC, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<
  SVGProps<SVGSVGElement>,
  'onClick' | 'onMouseLeave' | 'onMouseEnter' | 'data-selected'
>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  'data-testid'?: string;
  'data-selected'?: boolean;
  onMouseLeave?: () => void;
  onMouseEnter?: () => void;
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
    onMouseLeave,
    onMouseEnter,
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.Icon, {}, [clickable ? '' : className])}
      height={height}
      width={width}
      data-testid={props['data-testid']}
      data-selected={props['data-selected']}
      onMouseLeave={clickable ? undefined : onMouseLeave}
      onMouseEnter={clickable ? undefined : onMouseEnter}
    />
  );

  if (clickable) {
    return (
      <button
        type='button'
        className={classNames(cls.button, {}, [className])}
        onClick={props.onClick}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
        data-testid={props['data-testid']}
        data-selected={props['data-selected']}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
