import { CSSProperties } from 'react';

export interface ImageElementProps {
  src: string;
  alt: string | '';
  className?: string;
  id?: string;
  style?: CSSProperties | undefined;
}
