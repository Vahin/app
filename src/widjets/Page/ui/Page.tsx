import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollRecord, scrollSaverActions } from '@/features/scrollSaver';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests/tests';
import { ToggleComponentFeatures } from '@/shared/lib/features';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

const PageDeprecated = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollRecord(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaverActions.setScrollPosition({
        path: pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
});

const PageRedisigned = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getScrollRecord(state, pathname),
  );

  useInfiniteScroll({
    triggerRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  }, []);

  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(
      scrollSaverActions.setScrollPosition({
        path: pathname,
        position: event.currentTarget.scrollTop,
      }),
    );
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.PageRedisigned, {}, [className])}
      onScroll={onScroll}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </section>
  );
});

export const Page = (props: PageProps) => (
  <ToggleComponentFeatures
    feature='isAppRedisigned'
    on={<PageRedisigned {...props} />}
    off={<PageDeprecated {...props} />}
  />
);
