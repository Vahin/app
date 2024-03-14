import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  getNavbarItems,
  getNavbarItemsDeprecated,
} from '../../model/selectors/getNavbarItems';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
  collapsed?: boolean;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className, collapsed = false } = props;
  const navbarItemsListDeprecated = useSelector(getNavbarItemsDeprecated);
  const navbarItemsList = useSelector(getNavbarItems);

  const itemsListDeprecated = useMemo(
    () =>
      navbarItemsListDeprecated.map((item) => (
        <NavbarItem item={item} collapsed={collapsed} key={item.path} />
      )),
    [collapsed, navbarItemsListDeprecated],
  );

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
      on={
        <nav className={classNames(cls.Navbar, {}, [className])}>
          {itemsList}
        </nav>
      }
      off={
        <nav className={classNames('', {}, [className])}>
          <VStack gap='8' role='navigation'>
            {itemsListDeprecated}
          </VStack>
        </nav>
      }
    />
  );
});
