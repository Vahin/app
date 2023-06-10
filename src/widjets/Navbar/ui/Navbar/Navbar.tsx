import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { NavbarItemsList } from '../../model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, collapsed = false } = props;

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        NavbarItemsList.map((item) => (
          <NavbarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
          />
        ))
      }
    </nav>
  );
});
