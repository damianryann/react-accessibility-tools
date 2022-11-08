import React, { ElementType, FunctionComponent } from 'react';

import { HeaderProps } from './HeaderElement.types';

export const headerOptions = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const HeaderElement: FunctionComponent<HeaderProps> = ({
  children,
  isFunctional,
  heading,
  fallBack,
  className,
  id,
  style
}) => {
  if (
    !headerOptions.includes(String(heading).toLowerCase()) &&
    !headerOptions.includes(String(fallBack).toLowerCase())
  ) {
    const errMessage =
      'React Accessibility Tools Error: heading or fallBack must contain the correct header value. Please refer to documentation.';
    console.error(errMessage);
    return <code>{errMessage}</code>;
  }

  const divClassHanlder: Function = () => {
    let classes = [
      heading.toLowerCase() ?? undefined,
      !heading ? fallBack?.toLowerCase() : undefined,
      className ?? undefined
    ].join(' ');

    const removeExtraSpaces: RegExp = / +/g;

    if (!className) {
      return classes.toString().replaceAll(removeExtraSpaces, '');
    } else {
      return classes.toString().replaceAll(removeExtraSpaces, ' ');
    }
  };

  const Header = (
    heading ? heading.toLowerCase() : fallBack?.toLowerCase()
  ) as ElementType;

  const headerElementMarkup = isFunctional ? (
    <Header
      className={className ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
    >
      {children}
    </Header>
  ) : (
    <div
      className={divClassHanlder() ?? undefined}
      id={id ?? undefined}
      style={style ?? undefined}
    >
      {children}
    </div>
  );

  return headerElementMarkup;
};

export default HeaderElement;
