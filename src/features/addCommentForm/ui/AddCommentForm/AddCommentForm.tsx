import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getCommentFormError } from '../../model/selectors/getCommentFormError/getCommentFormError';
import { getCommentFormText } from '../../model/selectors/getCommentFormText/getCommentFormText';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const AddCommentForm = memo((props: AddCommentFormProps) => {
  const { t } = useTranslation();
  const { className, onSendComment } = props;

  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onSendComment, onCommentTextChange, text]);

  const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
  };

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Что скажете?')}
          value={text}
          onChange={onCommentTextChange}
          className={cls.input}
        />
        <Button
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

export default AddCommentForm;
