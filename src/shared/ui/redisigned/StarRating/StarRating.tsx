import { memo, useState } from 'react';
import { Icon } from '../Icon/Icon';
import Star from '@/shared/assets/icons/star-outline.svg';
import StarFill from '@/shared/assets/icons/star-fill.svg';
import { HStack } from '../Stack';
import cls from './StarRating.module.scss';

interface StarRatingProps {
  className?: string;
  onSelect?: (starNumber: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, onSelect, size = 30, selectedStars = 0 } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

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
    <HStack className={className}>
      {stars.map((starNumber) => (
        <Icon
          Svg={currentStarsCount >= starNumber ? StarFill : Star}
          key={starNumber}
          width={size}
          height={size}
          clickable={!isSelected}
          className={!isSelected ? cls.clicableStar : cls.star}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </HStack>
  );
});
