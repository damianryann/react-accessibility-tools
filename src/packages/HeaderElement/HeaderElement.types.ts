import { CSSProperties, ReactNode } from 'react';

export interface HeaderProps {
  children: ReactNode;
  isFunctional?: boolean;
  heading: string;
  fallBack?: string;
  className?: string;
  id?: string;
  style?: CSSProperties | undefined;
}
