import React from "react";

export interface HeaderProps {
  title: string;
  isFunctional: boolean;
  value: string;
  fallBack?: string;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}
