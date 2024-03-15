import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redisigned/Card';
import { getArticleDetailsData } from '@/entities/Article';
import { getArticleDetailsEditability } from '../../model/selectors/getArticleDetailsEditability';
import { ArticleAdditionalInfo } from '@/widjets/ArticleAdditionalInfo';

interface AdditionalInfoContainerProps {
  className?: string;
}

export const AdditionalInfoContainer = memo(
  (props: AdditionalInfoContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const views = useSelector(getArticleDetailsData)?.views || 0;
    const enableEditButton = useSelector(getArticleDetailsEditability);

    if (!id) return null;

    return (
      <Card padding='24' className={classNames('', {}, [className])}>
        <ArticleAdditionalInfo
          id={id}
          views={views}
          enableButton={enableEditButton}
        />
      </Card>
    );
  },
);
