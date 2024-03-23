import { ImgHTMLAttributes, ReactElement } from 'react';

export interface AppimageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}
