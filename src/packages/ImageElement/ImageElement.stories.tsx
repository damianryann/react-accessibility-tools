import React from 'react';

import img from '../../assets/logo.svg';
import '../../sass/index.scss';
import ImageElement from './ImageElement';
import { ImageElementProps } from './ImageElement.types';

export default { title: 'React Accessible Components/ImageElement', component: ImageElement };

export const withAltText = ({ src, alt, ...props }: ImageElementProps) => (
  <div className="w-50">
    <ImageElement src={src ?? img} alt={alt} {...props} />
  </div>
);
export const withoutAltText = ({ src, ...props }: ImageElementProps) => (
  <div className="w-50">
    <ImageElement src={src ?? img} {...props} />{' '}
  </div>
);
export const withoutAltDecortative = ({
  src,
  alt,
  ...props
}: ImageElementProps) => (
  <div className="w-50">
    <ImageElement src={src ?? img} alt={alt} {...props} />{' '}
  </div>
);

export const withExtras = ({ src, alt, ...props }: ImageElementProps) => (
  <div className="w-50">
    <ImageElement src={src ?? img} alt={alt} {...props} />{' '}
  </div>
);

withAltText.args = {
  src: img
};

withoutAltText.args = {
  src: img
};

withoutAltDecortative.args = {
  src: img
};

withExtras.args = {
  src: img
};
