import { memo } from 'react';
import { Icon } from '@/shared/ui/redisigned/Icon';
import ArrowIcon from '@/shared/assets/icons/scroll-top.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className } = props;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={ArrowIcon}
      width={32}
      height={32}
      clickable
      onClick={handleClick}
      className={className}
    />
  );
});
