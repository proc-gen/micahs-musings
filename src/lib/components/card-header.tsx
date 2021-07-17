import React from 'react';

import { Box, BoxProps, useColorModeValue, Heading } from '@chakra-ui/react';

export interface ICardHeaderProps extends BoxProps {}

export const CardHeader: React.FC<ICardHeaderProps> = ({ children }, rest) => {
  return (
    <Box
      padding="0.5em"
      color={useColorModeValue('gray.800', 'gray.100')}
      {...rest}
    >
      <Heading>{children}</Heading>
    </Box>
  );
};
