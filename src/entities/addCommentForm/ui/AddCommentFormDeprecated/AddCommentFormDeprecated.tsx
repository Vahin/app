import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonSize } from '@/shared/ui/deprecated/Button';
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
import cls from './AddCommentFormDeprecated.module.scss';
import { AddCommentFormProps } from '../../types/AddCommentFormProps';

export const AddCommentFormDeprecated = memo((props: AddCommentFormProps) => {
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
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange, text]);

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div
        data-testid='AddCommentForm'
        className={classNames(cls.AddCommentForm, {}, [className])}
      >
        <Input
          data-testid='AddCommentForm.Input'
          placeholder={t('Что скажете?')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button
          data-testid='AddCommentForm.Button'
          className={cls.button}
          size={ButtonSize.S}
          onClick={onSendHandler}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
