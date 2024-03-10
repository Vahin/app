import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '../../../entities/Article/model/types/article';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Tabs } from '@/shared/ui/redisigned/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeTab: (value: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { t } = useTranslation();
  const { className, value, onChangeTab } = props;

  const typeTabs = useMemo<TabItem[]>(
    () => [
      {
        value: 'ALL',
        content: t('Все'),
      },
      {
        value: 'IT',
        content: t('Айти'),
      },
      {
        value: 'ECONOMICS',
        content: t('Экономика'),
      },
      {
        value: 'POLITICS',
        content: t('Политика'),
      },
      {
        value: 'SCIENCE',
        content: t('Наука'),
      },
    ],
    [t],
  );

  const onTabClick = useCallback(
    (tab: TabItem) => {
      onChangeTab(tab.value as ArticleType);
    },
    [onChangeTab],
  );

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Tabs
          tabs={typeTabs}
          value={value}
          direction='column'
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
      off={
        <TabDeprecated
          tabs={typeTabs}
          value={value}
          onTabClick={onTabClick}
          className={classNames('', {}, [className])}
        />
      }
    />
  );
});
