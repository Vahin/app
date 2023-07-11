import { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getNavbarItems } from 'widjets/Navbar/model/selectors/getNavbarItems';
import { VStack } from 'shared/ui/Stack';
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
    <nav className={classNames('', {}, [className])}>
      <VStack gap="16">
        {itemsList}
      </VStack>
    </nav>
  );
});
