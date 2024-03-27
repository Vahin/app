import { ForwardedRef, ReactNode, forwardRef } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
  'data-testid'?: string;
}

export const AppLink = forwardRef(
  (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    const {
      className,
      children,
      activeClassName = '',
      variant = 'primary',
      to,
      'data-testid': dataTestid,
      ...otherProps
    } = props;

    return (
      <NavLink
        to={to}
        ref={ref}
        className={({ isActive }) =>
          classNames(cls.AppLink, { [activeClassName]: isActive }, [
            className,
            cls[variant],
          ])
        }
        data-testid={dataTestid || 'AppLink'}
        {...otherProps}
      >
        {children}
      </NavLink>
    );
  },
);
