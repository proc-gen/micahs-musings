import React from 'react';

import { Box, BoxProps, Center, useColorModeValue } from '@chakra-ui/react';

export interface ICardProps extends BoxProps {
  centered?: boolean;
}

export const Card: React.FC<ICardProps> = ({ children, centered = false, ...props }) => {
  let retComponent = (
    <Box
      margin="1em"
      backgroundColor={useColorModeValue('gray.300', 'gray.800')}
      borderColor={useColorModeValue('gray.300', 'gray.800')}
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="0.4em"
      boxShadow="0.4em 0.4em 0.2em"
      color={useColorModeValue('gray.400', 'gray.600')}
      {...props}
    >
      {children}
    </Box>
  );
  if (centered) {
    retComponent = <Center>{retComponent}</Center>;
  }
  return retComponent;
};
