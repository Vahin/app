import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// ! import { getCommentFormError } from '../../model/selectors/getCommentFormError/getCommentFormError';
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { AddCommentFormProps } from '../../types/AddCommentFormProps';
import { Input } from '@/shared/ui/redisigned/Input';
import { HStack } from '@/shared/ui/redisigned/Stack';
import cls from './AddCommentFormRedisigned.module.scss';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redisigned/Icon';
import SendIcon from '@/shared/assets/icons/send.svg';

export const AddCommentFormRedisigned = memo((props: AddCommentFormProps) => {
  const { t } = useTranslation();
  const { className, onSendComment } = props;

  const text = useSelector(getCommentFormText);
  // ! const error = useSelector(getCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    console.log('1');
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange, text]);

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid='AddCommentForm'
        className={classNames(cls.AddCommentForm, {}, [className])}
        gap='16'
        align='center'
      >
        <Input
          data-testid='AddCommentForm.Input'
          placeholder={t('Написать комментарий')}
          value={text}
          padding='none'
          onChange={onCommentTextChange}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <Icon
          Svg={SendIcon}
          clickable
          onClick={onSendHandler}
          width={32}
          height={32}
        />
      </HStack>
    </DynamicModuleLoader>
  );
});
