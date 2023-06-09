import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select/Select';
import { SortOrder } from 'shared/types/SortOrder/SortOrder';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '../../model/types/article';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder
  sort: ArticleSortField
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { t } = useTranslation();
  const {
    className,
    order,
    sort,
    onChangeOrder,
    onChangeSort,
  } = props;

  const orderOption = useMemo<SelectOptions<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('возрастанию'),
    },
    {
      value: 'desc',
      content: t('убыванию'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('дате создания'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('названию'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('просмотрам'),
    },
  ], [t]);

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select
        label={t('Сортировать по:')}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select
        label={t(' По:')}
        options={orderOption}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
