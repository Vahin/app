import {
  ReactNode, memo, useCallback, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
  value: string
  content: ReactNode
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const clickHandler = useCallback((tab: TabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  const renderTabs = useMemo(() => tabs.map((tab) => (
    <Card
      className={cls.tab}
      key={tab.value}
      theme={tab.value === value ? 'normal' : 'outlined'}
      onClick={clickHandler(tab)}
    >
      {tab.content}
    </Card>
  )), [tabs, clickHandler, value]);

  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {renderTabs}
    </div>
  );
});
