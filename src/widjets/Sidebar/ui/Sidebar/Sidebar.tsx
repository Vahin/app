import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { AppLogo } from '@/shared/ui/AppLogo';

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
      <AppLogo className={cls.appLogo} />
    </aside>
  );
});
