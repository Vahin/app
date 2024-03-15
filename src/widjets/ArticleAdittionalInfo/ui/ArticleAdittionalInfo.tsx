import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleAdittionalInfo.module.scss';
import { ArticleEditButton } from '@/features/ArticleEditButton';
import { VStack } from '@/shared/ui/redisigned/Stack';
import { Text } from '@/shared/ui/redisigned/Text';

interface ArticleAdittionalInfoProps {
  className?: string;
  id: string;
  views: number;
  enableButton: boolean;
}

export const ArticleAdittionalInfo = memo(
  (props: ArticleAdittionalInfoProps) => {
    const { t } = useTranslation();
    const { className, id, views, enableButton } = props;

    return (
      <VStack
        gap='32'
        align='center'
        className={classNames(cls.ArticleAdittionalInfo, {}, [className])}
      >
        {enableButton && <ArticleEditButton id={id} />}
        <Text
          text={t('{{count}} просмотров', { count: views })}
          className={cls.text}
        />
      </VStack>
    );
  },
);
