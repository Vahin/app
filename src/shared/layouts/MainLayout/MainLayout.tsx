import { ReactElement, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
  toolbar?: ReactElement;
  className?: string;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { className, header, content, sidebar, toolbar } = props;

  return (
    <div className={classNames(cls.MainLayout, {}, [className])}>
      <div className={cls.sidebar}>{sidebar}</div>
      <div className={cls.content}>{content}</div>
      <div className={cls.rightbar}>
        <div className={cls.header}>{header}</div>
        <div className={cls.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
});
