import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { useDeviceDetect } from '@/shared/lib/hooks/useDeviceDetect/useDeviceDetect';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const { t } = useTranslation();
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
  } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');
  const isMobile = useDeviceDetect();

  const onSelect = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
  }, [hasFeedback, onAccept]);

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <VStack max gap="32">
      <Text title={feedbackTitle} />
      <Input placeholder={t('Ваш отзыв')} onChange={setFeedback} />

    </VStack>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack gap="8" align="center">
        <Text title={title} />
        <StarRating size={40} onSelect={onSelect} />
      </VStack>
      {
        isMobile ? (
          <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
            <VStack gap="8" align="stretch">
              {modalContent}
              <Button onClick={acceptHandle}>{t('Отправить')}</Button>
            </VStack>
          </Drawer>
        ) : (
          <Modal isOpen={isModalOpen} onClose={cancelHandle}>
            <VStack gap="8" align="center">
              {modalContent}

              <HStack max justify="spaceBetween">
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>{t('Закрыть')}</Button>
                <Button onClick={acceptHandle}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </Modal>
        )
      }

    </Card>
  );
});
