import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesFilters } from '@/widjets/ArticlesFilters';
import { useArticlesFilter } from '../../lib/hooks/useArticlesFilter';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const {
    order,
    sort,
    search,
    tabsValue,
    onChangeOrder,
    onChangeSort,
    onChangeSearch,
    onChangeTab,
  } = useArticlesFilter();

  return (
    <ArticlesFilters
      className={className}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeTab={onChangeTab}
      order={order}
      search={search}
      sort={sort}
      tabsValue={tabsValue}
    />
  );
});
