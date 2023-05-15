import { FC, SVGProps } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeIcon.module.scss';
import Icon from '../assets/Icon.svg';

interface ThemeIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export const ThemeIcon: FC<ThemeIconProps> = (props) => {
  const { className, ...otherProps } = props;

  return (
    <Icon
      className={classNames(cls.ThemeIcon, {}, [className])}
      {...otherProps}
    />
  );
};
