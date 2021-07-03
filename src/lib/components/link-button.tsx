import React from 'react';

import { Button, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export interface ILinkButtonProps {
  href: string;
  text: string;
}

export const LinkButton: React.FC<ILinkButtonProps> = (props) => {
  return (
    <Link as={ReactLink} to={props.href}>
      <Button>{props.text}</Button>
    </Link>
  );
};
