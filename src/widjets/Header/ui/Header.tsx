import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Header, {}, [className])}>
      /
    </div>
  );
};
