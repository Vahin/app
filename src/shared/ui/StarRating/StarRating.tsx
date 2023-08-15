import { memo, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import Star from './assets/Star.svg';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starNumber: number) => void
  size?: number
  selectedStars?: number
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const {
    className,
    onSelect,
    size = 30,
    selectedStars = 0,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const mods: Mods = {
    [cls.selected]: isSelected,
  };

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starNumber);
      setIsSelected(true);
      onSelect?.(starNumber);
    }
  };

  return (
    <div className={classNames(cls.StarRating, mods, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={Star}
          key={starNumber}
          strokeVariant="primary"
          fillVariant={currentStarsCount >= starNumber ? 'primary' : 'none'}
          width={size}
          height={size}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
