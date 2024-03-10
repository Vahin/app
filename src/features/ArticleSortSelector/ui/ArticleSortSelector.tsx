import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/SortOrder/SortOrder';
import { ArticleSortField } from '../../../entities/Article/model/consts/consts';
import cls from './ArticleSortSelector.module.scss';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Listbox } from '@/shared/ui/redisigned/Popups';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Text } from '@/shared/ui/redisigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  order: SortOrder;
  sort: ArticleSortField;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { t } = useTranslation();
  const { className, order, sort, onChangeOrder, onChangeSort } = props;

  const orderOption = useMemo<SelectOptions<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('Возрастанию'),
      },
      {
        value: 'desc',
        content: t('Убыванию'),
      },
    ],
    [t],
  );

  const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('Дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('Названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('Просмотрам'),
      },
    ],
    [t],
  );

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <VStack gap='8'>
            <Text text={t('Сортировать по:')} />
            <Listbox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <Listbox
              items={orderOption}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
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
      }
    />
  );
});
