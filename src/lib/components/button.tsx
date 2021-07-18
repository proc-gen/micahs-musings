import React from 'react';

import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {}

export const StyledButton: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      backgroundColor={useColorModeValue('gray.200', 'gray.700')}
      color={useColorModeValue('gray.800', 'gray.100')}
      _hover={{
        backgroundColor: useColorModeValue('gray.400', 'gray.600'),
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
