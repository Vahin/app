import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Avatar } from '@/shared/ui/redisigned/Avatar';
import { Text } from '@/shared/ui/redisigned/Text';
import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData';
import { HStack, VStack } from '@/shared/ui/redisigned/Stack';
import { renderArticleBlock } from './renderArticleBlock';
import { AppimageWrapper } from '@/shared/ui/redisigned/AppimageWrapper/AppimageWrapper';

interface ArticleDetailsContainerProps {
  className?: string;
}

export const ArticleDetailsContent = memo(
  (props: ArticleDetailsContainerProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const article = useSelector(getArticleDetailsData);

    return (
      <VStack gap='16' max align='stretch' className={className}>
        <VStack gap='8'>
          <HStack gap='8' align='center'>
            <Avatar size={32} src={article?.user.avatar} />
            <Text text={article?.user.username} bold />
            <Text text={article?.createdAt} />
          </HStack>
          <Text title={article?.title} size='l' bold />
        </VStack>

        <Text title={article?.subtitle} />

        {article?.img ? (
          <AppimageWrapper
            src={article?.img}
            width='full'
            ratio='horizontal-wide'
          />
        ) : null}

        {article?.blocks.map(renderArticleBlock)}
      </VStack>
    );
  },
);
