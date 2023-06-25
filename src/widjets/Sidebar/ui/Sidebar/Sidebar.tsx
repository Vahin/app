import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widjets/Navbar';
import { ThemeSwitcher } from 'widjets/ThemeSwitcher';
import { LangSwitcher } from 'widjets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

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
    <menu
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Navbar className={cls.Navbar} collapsed={collapsed} />
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleClickHandler}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        { collapsed ? '>' : '<' }
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  );
});
