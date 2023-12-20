import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonSize } from '@/shared/ui/Button/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsEditability } from '../../model/selectors/getArticleDetailsEditability';
import cls from './ArticleDetailsHeader.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsHeaderProps {
  className?: string;
  id: string
}

export const ArticleDetailsHeader = memo((props: ArticleDetailsHeaderProps) => {
  const { t } = useTranslation();
  const { className, id } = props;
  const navigate = useNavigate();
  const editability = useSelector(getArticleDetailsEditability);

  const onBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onEdit = useCallback(() => {
    navigate(`${RoutePath.article_details}${id}/edit`);
  }, [navigate, id]);

  return (
    <div className={classNames(cls.ArticleDetailsHeader, {}, [className])}>
      <Button
        onClick={onBack}
        size={ButtonSize.S}
        className={cls.backBtn}
      >
        {t('Назад')}

      </Button>
      {
        editability && (
        <Button
          onClick={onEdit}
          size={ButtonSize.S}
          className={cls.editBtn}
        >
          {t('Редактировать')}

        </Button>
        )
      }

    </div>
  );
});
