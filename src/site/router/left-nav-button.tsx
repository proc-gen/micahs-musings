import React from 'react';

import { IconButton, IconButtonProps } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

interface ILeftNavButtonProps extends IconButtonProps {
  toggleFunc: () => void;
}

export const LeftNavButton: React.FC<ILeftNavButtonProps> = (
  props: ILeftNavButtonProps
) => {
  const toggleLeftNav = () => {
    const { toggleFunc } = props;
    toggleFunc();
  };

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleLeftNav}
      icon={<HamburgerIcon />}
      {...props}
      aria-label={`Toggle menu`}
    />
  );
};
