import * as React from 'react';
import { IconButton, IconButtonProps, useColorModeValue } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

type HamburgerMenuProps = Omit<IconButtonProps, 'aria-label'>;
interface IHamburgerMenuProps extends HamburgerMenuProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  menuOpen: boolean;
}

export const HamburgerMenu: React.FC<IHamburgerMenuProps> = (props) => {
  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      onClick={props.onClick}
      icon={<FaBars />}
      aria-label={props.menuOpen ? 'Close left nav' : 'Open left nav'}
      border="none"
      transition="none"
      _hover={{
        border: '2px solid',
        borderColor: useColorModeValue('green.500', 'green.500'),
      }}
      _focus={{
        border: 'none',
      }}
      {...props}
    />
  );
};
