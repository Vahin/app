import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Button } from '@/shared/ui/redisigned/Button';

interface ArticleEditButtonProps {
  className?: string;
  id: string;
}

export const ArticleEditButton = memo((props: ArticleEditButtonProps) => {
  const { t } = useTranslation();
  const { className, id } = props;
  const navigate = useNavigate();

  const onEdit = useCallback(() => {
    navigate(getRouteArticleEdit(id));
  }, [navigate, id]);

  return (
    <Button onClick={onEdit} size='m' className={className}>
      {t('Редактировать')}
    </Button>
  );
});
