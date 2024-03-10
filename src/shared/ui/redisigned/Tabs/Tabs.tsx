import { ReactNode, memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  direction?: FlexDirection;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, direction = 'row', onTabClick } = props;

  const clickHandler = useCallback(
    (tab: TabItem) => () => {
      onTabClick(tab);
    },
    [onTabClick],
  );

  const renderTabs = useMemo(
    () =>
      tabs.map((tab) => {
        const isSelected = tab.value === value;

        return (
          <Card
            className={cls.tab}
            paddingV='8'
            paddingH='16'
            key={tab.value}
            variant={isSelected ? 'light' : 'normal'}
            border='round'
            onClick={clickHandler(tab)}
          >
            {tab.content}
          </Card>
        );
      }),
    [tabs, clickHandler, value],
  );

  return (
    <Flex
      direction={direction}
      gap='8'
      className={classNames(cls.Tabs, {}, [className])}
    >
      {renderTabs}
    </Flex>
  );
});
