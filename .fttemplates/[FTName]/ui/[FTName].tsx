import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './[FTName].module.scss';

interface [FTName]Props {
  className?: string;
}

export const [FTName] = memo((props: [FTName]Props) => {
  const { t } = useTranslation();
  const { className } = props;

  return (
    <div className={classNames(cls.[FTName], {}, [className])}>
      <div />
    </div>
  );
});