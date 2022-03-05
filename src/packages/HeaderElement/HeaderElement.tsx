import React, { ElementType, FunctionComponent } from 'react';

import { HeaderProps } from './HeaderElement.types';

export const headerOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const HeaderElement: FunctionComponent<HeaderProps> = ({
  title,
  isFunctional,
  value,
  fallBack,
  className,
  id,
  style
}) => {
  if (
    !headerOptions.includes(String(value).toLowerCase()) &&
    !headerOptions.includes(String(fallBack).toLowerCase())
  ) {
    const errMessage =
      'Error 001: value or fallBack must contain the correct header value. Please refer to documentation.';
    console.error(errMessage);
    return <code>{errMessage}</code>;
  }

  const divClassHanlder = () => {
    let classes = [
      value.toLowerCase() ?? undefined,
      !value ? fallBack?.toLowerCase() : undefined,
      className ?? undefined
    ].join(' ');

    const removeExtraSpaces = / +/g;

    if (!className) {
      return classes.toString().replaceAll(removeExtraSpaces, '');
    } else {
      return classes.toString().replaceAll(removeExtraSpaces, ' ');
    }
  };

  const Header = (
    value ? value.toLowerCase() : fallBack?.toLowerCase()
  ) as ElementType;

  const headerElementMarkup = isFunctional ? (
    <Header
      className={className ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
    >
      {title}
    </Header>
  ) : (
    <div
      className={divClassHanlder() ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
    >
      {title}
    </div>
  );

  return headerElementMarkup;
};

export default HeaderElement;
