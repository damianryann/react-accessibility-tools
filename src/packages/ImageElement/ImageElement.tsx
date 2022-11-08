import React, { FunctionComponent } from 'react';

import { ImageElementProps } from './ImageElement.types';

const ImageElement: FunctionComponent<ImageElementProps> = ({
  src,
  alt,
  className,
  id,
  style
}) => {
  const imageElementMarkup = alt ? (
    <img
      src={src}
      className={className ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
      alt={alt}
    />
  ) : (
    <img
      src={src}
      role="presentation"
      className={className ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
      alt=""
    />
  );

  return imageElementMarkup;
};

export default ImageElement;
