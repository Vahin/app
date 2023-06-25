import {
  MutableRefObject, ReactNode, memo, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
    >
      {children}
      <div
        ref={triggerRef}
      />
    </section>
  );
});
