import React from 'react';

import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {}

export const StyledButton: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      backgroundColor={useColorModeValue('green.400', 'green.700')}
      color={useColorModeValue('gray.800', 'gray.100')}
      border="none"
      transition="none"
      _hover={{
        backgroundColor: useColorModeValue('green.300', 'green.600'),
        border: '2px solid',
        borderColor: useColorModeValue('green.500', 'green.500'),
      }}
      _focus={{
        border: 'none',
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
