import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { StarRating } from '@/shared/ui/redisigned/StarRating';
import { Modal } from '@/shared/ui/redisigned/Modal';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Drawer } from '@/shared/ui/redisigned/Drawer';
import { RatingCardProps } from '../types/RatingCardProps';
import { Text } from '@/shared/ui/redisigned/Text';
import { Input } from '@/shared/ui/redisigned/Input';
import { Card } from '@/shared/ui/redisigned/Card';
import { Button } from '@/shared/ui/redisigned/Button';

export const RatingCardRedisigned = memo((props: RatingCardProps) => {
  const { t } = useTranslation();
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    rate = 0,
    onCancel,
    onAccept,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const isMobile = useDeviceDetect();

  const onSelect = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap='32'>
      <Text title={feedbackTitle} />
      <Input
        data-testid='RatingCard.Input'
        placeholder={t('Ваш отзыв')}
        onChange={setFeedback}
      />
    </VStack>
  );

  return (
    <Card data-testid='RatingCard' className={classNames('', {}, [className])}>
      <VStack gap='8' align='center'>
        <Text title={starsCount ? 'Спасибо за оценку!' : title} />
        <StarRating size={32} onSelect={onSelect} selectedStars={starsCount} />
      </VStack>
      {isMobile ? (
        <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
          <VStack gap='8' align='stretch'>
            {modalContent}
            <Button data-testid='RatingCard.Send' onClick={acceptHandle}>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      ) : (
        <Modal isOpen={isModalOpen} onClose={cancelHandle}>
          <VStack gap='8' align='center'>
            {modalContent}

            <HStack gap='8' max justify='spaceBetween'>
              <Button data-testid='RatingCard.Close' onClick={cancelHandle}>
                {t('Закрыть')}
              </Button>
              <Button data-testid='RatingCard.Send' onClick={acceptHandle}>
                {t('Отправить')}
              </Button>
            </HStack>
          </VStack>
        </Modal>
      )}
    </Card>
  );
});
