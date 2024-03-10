import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redisigned/Card';

import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import cls from './ArticlesFilters.module.scss';
import { Input } from '@/shared/ui/redisigned/Input';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redisigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  tabsValue: ArticleType;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeTab: (value: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const { t } = useTranslation();
  const {
    className,
    order,
    sort,
    search,
    tabsValue,
    onChangeSearch,
    onChangeOrder,
    onChangeSort,
    onChangeTab,
  } = props;

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding='24'
    >
      <VStack gap='32'>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
          paddingV='none'
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleTypeTabs value={tabsValue} onChangeTab={onChangeTab} />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
