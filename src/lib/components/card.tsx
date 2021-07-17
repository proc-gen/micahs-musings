import React from 'react';

import { Box, BoxProps, Center, useColorModeValue } from '@chakra-ui/react';

export interface ICardProps extends BoxProps {
  centered?: boolean;
}

export const Card: React.FC<ICardProps> = ({
  children,
  centered = false,
  ...props
}) => {
  let retComponent = (
    <Box
      margin="1em"
      backgroundColor={useColorModeValue('gray.200', 'gray.700')}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      borderStyle="solid"
      borderWidth="1px"
      boxShadow="0.3em 0.3em"
      color={useColorModeValue('gray.300', 'gray.600')}
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
