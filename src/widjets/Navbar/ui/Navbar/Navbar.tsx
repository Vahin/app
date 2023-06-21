import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getNavbarItems } from 'widjets/Navbar/model/selectors/getNavbarItems';
import { NavbarItemType } from 'widjets/Navbar/model/types/navbar';
import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, collapsed = false } = props;
  const navbarItemsList = useSelector(getNavbarItems);

  const itemsList = useMemo(() => navbarItemsList.map((item) => (
    <NavbarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
    />
  )), [collapsed, navbarItemsList]);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      {itemsList}
    </nav>
  );
});
