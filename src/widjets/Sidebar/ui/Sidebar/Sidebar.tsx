import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/redisigned/AppLogo';
import { Navbar } from '@/features/Navbar';
import { Icon } from '@/shared/ui/redisigned/Icon';
import Arrow from '@/shared/assets/icons/arrow-bottom.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props;

  const [collapsed, setCollapsed] = useState(false);

  const toggleClickHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      data-testid='Sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <AppLogo className={cls.appLogo} size={collapsed ? 30 : 50} />
      <Navbar className={cls.Navbar} collapsed={collapsed} />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
      <Icon
        data-testid='sidebar-toggle'
        Svg={Arrow}
        className={cls.collapseBtn}
        clickable
        onClick={toggleClickHandler}
      />
    </aside>
  );
});
