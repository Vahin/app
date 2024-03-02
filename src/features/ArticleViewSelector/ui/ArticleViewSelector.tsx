import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import ViewIconSmall from '../assets/icons/tails.svg';
import ViewIconBig from '../assets/icons/list.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../../entities/Article/model/consts/consts';

interface ArticleViewSelectorProps {
  className?: string;
  view?: ArticleView;
  onViewClick: (newView: ArticleView) => void;
}

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
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            fillVariant={view === viewType.view ? 'primary' : 'secondary'}
            width={16}
            height={16}
          />
        </Button>
      ))}
    </div>
  );
});
