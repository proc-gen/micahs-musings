import * as React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
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
      {...props}
    />
  );
};
