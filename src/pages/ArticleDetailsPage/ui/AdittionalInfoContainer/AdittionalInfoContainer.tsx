import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AdittionalInfoContainer.module.scss';
import { Card } from '@/shared/ui/redisigned/Card';
import { ArticleAdittionalInfo } from '@/widjets/ArticleAdittionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
import { getArticleDetailsEditability } from '../../model/selectors/getArticleDetailsEditability';

interface AdittionalInfoContainerProps {
  className?: string;
}

export const AdittionalInfoContainer = memo(
  (props: AdittionalInfoContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const views = useSelector(getArticleDetailsData)?.views || 0;
    const enableEditButton = useSelector(getArticleDetailsEditability);

    if (!id) return null;

    return (
      <Card
        padding='24'
        className={classNames(cls.AdittionalInfoContainer, {}, [className])}
      >
        <ArticleAdittionalInfo
          id={id}
          views={views}
          enableButton={enableEditButton}
        />
      </Card>
    );
  },
);
