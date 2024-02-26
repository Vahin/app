import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlePageWasOpened } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlePageWasOpened) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageWasOpened: true }));
    }
  }, [dispatch, isArticlePageWasOpened]);

  const onClose = () => setIsOpen(false);

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      <Text title={t('Добро пожаловать')} text={t('Добро пожаловать')} />{' '}
    </Modal>
  );
});
