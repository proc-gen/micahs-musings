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
        colorScheme={useColorModeValue('blackAlpha', 'whiteAlpha')}
        color={useColorModeValue('gray.800', 'gray.100')}
        {...rest}
      >
        {text}
      </Button>
    </Link>
  );
};
