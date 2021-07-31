import * as React from 'react';

import {
  Box,
  Heading,
  Flex,
  Spacer,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  useMediaQuery,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './color-mode-switcher';
import { HamburgerMenu } from './hamburger-menu';
import { LeftNav } from './left-nav';

interface ILayoutMainState {
  menuOpen: boolean;
}

const PageLayout: React.FC = ({ children, ...rest }) => {
  return (
    <Box textAlign="center" fontSize="xl" backgroundColor={useColorModeValue('gray.100', 'gray.900')} {...rest}>
      {children}
    </Box>
  );
};

interface ITopNavProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  menuOpen: boolean;
}

const TopNav: React.FC<ITopNavProps> = ({ onClick, menuOpen, ...rest }) => {
  const [isMobile] = useMediaQuery('(max-width:576px)');

  return (
    <Flex paddingBottom="1em" backgroundColor={useColorModeValue('gray.200', 'gray.800')}>
      {isMobile && (
        <>
          <Box textAlign="left">
            <HamburgerMenu menuOpen={menuOpen} onClick={onClick} />
          </Box>
          <Spacer />
        </>
      )}
      <Box marginLeft={isMobile ? '' : '1em'} textAlign={isMobile ? 'center' : 'left'}>
        <Heading size="xl">Micah's Musings</Heading>
      </Box>
      <Spacer />
      <Box textAlign="right">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </Flex>
  );
};

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = ({ ...rest }) => {
  return (
    <Flex paddingBottom="1em" backgroundColor={useColorModeValue('gray.200', 'gray.800')}>
      <Spacer />
      <Box textAlign="right"></Box>
    </Flex>
  );
};

interface ILayoutProps {
  children?: React.ReactNode;
  menuOpen: boolean;
  menuChangeState: () => void;
}

const MainLayout: React.FC<ILayoutProps> = ({ children, menuOpen, menuChangeState }) => {
  const [isMobile] = useMediaQuery('(max-width:576px)');
  const iconBorderColor = useColorModeValue('green.500', 'green.500');
  return (
    <Flex>
      {!isMobile && (
        <Box width="200px">
          <LeftNav />
        </Box>
      )}

      {isMobile && (
        <Drawer isOpen={menuOpen} placement="left" onClose={menuChangeState} size="full">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              border="none"
              transition="none"
              _hover={{
                border: '2px solid',
                borderColor: iconBorderColor,
              }}
              _focus={{
                border: 'none',
              }}
            />
            <DrawerHeader>Micah's Musings</DrawerHeader>
            <DrawerBody>
              <LeftNav />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
      <Box width="100%">{children}</Box>
    </Flex>
  );
};

export class LayoutMain extends React.Component<any, ILayoutMainState> {
  constructor(props: any) {
    super(props);

    this.state = { menuOpen: false };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.changeMenuState = this.changeMenuState.bind(this);
  }

  handleHamburgerClick(event: React.MouseEvent<HTMLButtonElement>) {
    this.changeMenuState();
  }

  changeMenuState() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <PageLayout>
        <TopNav menuOpen={this.state.menuOpen} onClick={this.handleHamburgerClick} />
        <MainLayout menuOpen={this.state.menuOpen} menuChangeState={this.changeMenuState}>
          {this.props.children}
        </MainLayout>
        <Footer />
      </PageLayout>
    );
  }
}
