import React from 'react';

import { Text, TextProps } from '@chakra-ui/react';

export interface IParagraphProps extends TextProps {}

export const Paragraph: React.FC<IParagraphProps> = ({
  children,
  paddingBottom,
  ...rest
}) => {
  return (
    <Text paddingBottom={paddingBottom || '0.5em'} {...rest}>
      {children}
    </Text>
  );
};
