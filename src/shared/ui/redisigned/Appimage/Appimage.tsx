import { memo, useLayoutEffect, useState } from 'react';
import { AppimageProps } from './AppimageProps';

export const Appimage = memo((props: AppimageProps) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
  } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';

    img.onload = () => {
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
      setHasError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (hasError) {
    if (errorFallback) return errorFallback;
    return null;
  }

  return <img className={className} src={src} alt={alt} {...otherProps} />;
});
