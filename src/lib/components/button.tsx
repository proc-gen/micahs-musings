import React from 'react';

import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {}

export const StyledButton: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      backgroundColor={useColorModeValue('green.300', 'green.700')}
      color={useColorModeValue('gray.800', 'gray.100')}
      _hover={{
        backgroundColor: useColorModeValue('green.200', 'green.600'),
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
