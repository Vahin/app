import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppimageWrapper.module.scss';
import { AppimageProps } from '../Appimage/AppimageProps';
import { Appimage } from '../Appimage/Appimage';

type RatioType =
  | 'horizontal'
  | 'horizontal-wide'
  | 'vertical'
  | 'vertical-wide'
  | 'none';
type ObjectFitType = 'contain' | 'cover';
type WidthType = 'max' | 'none';

interface AppimageWrapperProps extends AppimageProps {
  ratio?: RatioType;
  objectFit?: ObjectFitType;
  classNameContainer?: string;
  width?: WidthType;
  'data-testid'?: string;
}

const mapWidthToClass: Record<WidthType, string> = {
  max: cls['width-max'],
  none: cls['width-none'],
};

const mapRatioToClass: Record<RatioType, string> = {
  horizontal: cls['ratio-horizontal'],
  'horizontal-wide': cls['ratio-horizontal-wide'],
  vertical: cls['ratio-vertical'],
  'vertical-wide': cls['ratio-vertical-wide'],
  none: cls['ratio-none'],
};

const mapObjectFitToClass: Record<ObjectFitType, string> = {
  contain: cls['fit-contain'],
  cover: cls['fit-cover'],
};

export const AppimageWrapper = memo((props: AppimageWrapperProps) => {
  const {
    className,
    classNameContainer,
    ratio = 'none',
    objectFit = 'cover',
    width = 'none',
    'data-testid': dataTestid,
    ...otherProps
  } = props;

  const additionals = [
    classNameContainer,
    mapRatioToClass[ratio],
    mapObjectFitToClass[objectFit],
    mapWidthToClass[width],
  ];

  return (
    <div
      className={classNames(cls.wrapper, {}, additionals)}
      data-testid={dataTestid || 'AppimageWrapper'}
    >
      <Appimage
        className={classNames(cls.image, {}, [cls.position, className])}
        data-testid={`${dataTestid || 'AppimageWrapper'}.Image`}
        {...otherProps}
      />
    </div>
  );
});
