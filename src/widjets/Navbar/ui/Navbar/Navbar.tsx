import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getNavbarItems } from 'widjets/Navbar/model/selectors/getNavbarItems';
import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, collapsed = false } = props;
  const navbarItemsList = useSelector(getNavbarItems);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {
        navbarItemsList.map((item) => (
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
