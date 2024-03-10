import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { useArticlesFilter } from '../../lib/hooks/useArticlesFilter';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
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
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ViewSelectorContainer />
      </div>
      <Card className={cls.search}>
        <Input
          value={search}
          onChange={onChangeSearch}
          placeholder={t('Поиск')}
        />
      </Card>
      <ArticleTypeTabs
        value={tabsValue}
        onChangeTab={onChangeTab}
        className={cls.tabs}
      />
    </div>
  );
});
