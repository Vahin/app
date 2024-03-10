import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import ViewIconSmallDeprecated from '../assets/icons/tails.svg';
import ViewIconBigDeprecated from '../assets/icons/list.svg';
import ViewIconSmall from '../assets/icons/menu-tail.svg';
import ViewIconBig from '../assets/icons/list-menu.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../../entities/Article/model/consts/consts';
import { ToggleComponentFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redisigned/Icon';
import { Card } from '@/shared/ui/redisigned/Card';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick: (newView: ArticleView) => void;
}

const viewTypesDepricated = [
  {
    view: ArticleView.SMALL,
    icon: ViewIconSmallDeprecated,
  },
  {
    view: ArticleView.BIG,
    icon: ViewIconBigDeprecated,
  },
];

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ViewIconSmall,
  },
  {
    view: ArticleView.BIG,
    icon: ViewIconBig,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleComponentFeatures
      feature='isAppRedisigned'
      on={
        <Card
          padding='8'
          border='round'
          className={classNames(cls.ArticleViewSelectorRedisigned, {}, [
            className,
          ])}
        >
          {viewTypes.map((viewType) => (
            <Icon
              Svg={viewType.icon}
              className={classNames('', {
                [cls.notSelected]: viewType.view !== view,
              })}
              clickable
              onClick={onClick(viewType.view)}
            />
          ))}
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypesDepricated.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                Svg={viewType.icon}
                fillVariant={view === viewType.view ? 'primary' : 'secondary'}
                width={16}
                height={16}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
