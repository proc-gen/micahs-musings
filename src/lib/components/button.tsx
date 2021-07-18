import React from 'react';

import { Button, ButtonProps, useColorModeValue } from '@chakra-ui/react';

export interface IButtonProps extends ButtonProps {}

export const StyledButton: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      colorScheme={useColorModeValue('blackAlpha', 'whiteAlpha')}
      color={useColorModeValue('gray.800', 'gray.100')}
      {...rest}
    >
      {children}
    </Button>
  );
};
