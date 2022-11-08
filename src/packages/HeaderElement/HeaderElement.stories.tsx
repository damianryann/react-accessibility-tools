import React from 'react';

import HeaderElement from './HeaderElement';
import { HeaderProps } from './HeaderElement.types';

export default {
  title: 'React Accessible Components/HeaderElement',
  component: HeaderElement,
  argTypes: {
    heading: {
      control: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
        type: 'select'
      }
    }
  }
};

export const Default = ({ heading, children, ...props }: HeaderProps) => {
  return (
    <HeaderElement heading={heading} {...props}>
      {children}
    </HeaderElement>
  );
};

Default.args = {
  heading: 'h1',
  children: 'Accessible Heading'
};
