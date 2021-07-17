import React from 'react';

import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';

export interface ICardBodyProps extends BoxProps {}

export const CardBody: React.FC<ICardBodyProps> = ({ children, ...rest }) => {
  return (
    <Box
      padding="0.5em"
      color={useColorModeValue('gray.800', 'gray.100')}
      {...rest}
    >
      {children}
    </Box>
  );
};
