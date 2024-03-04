import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getNavbarItems } from '../../model/selectors/getNavbarItems';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, collapsed = false } = props;
  const navbarItemsList = useSelector(getNavbarItems);

  const itemsList = useMemo(
    () =>
      navbarItemsList.map((item) => (
        <NavbarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, navbarItemsList],
  );

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={<nav className={classNames('', {}, [className])}>{itemsList}</nav>}
      off={
        <nav className={classNames('', {}, [className])}>
          <VStack gap='8' role='navigation'>
            {itemsList}
          </VStack>
        </nav>
      }
    />
  );
});
