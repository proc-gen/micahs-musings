import React from 'react';

import { Button, ButtonProps, Link, useColorModeValue } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export interface ILinkButtonProps extends ButtonProps {
  href: string;
  text: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = ({
  href,
  text,
  ...rest
}) => {
  return (
    <Link as={ReactLink} to={href}>
      <Button
        backgroundColor={useColorModeValue('blue.300', 'blue.700')}
        color={useColorModeValue('gray.800', 'gray.100')}
        _hover={{
          backgroundColor: useColorModeValue('blue.200', 'blue.600'),
        }}
        {...rest}
      >
        {text}
      </Button>
    </Link>
  );
};
