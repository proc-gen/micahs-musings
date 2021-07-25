import * as React from 'react';

import { Box, Heading, Flex, Spacer, useColorModeValue } from '@chakra-ui/react';

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
  return (
    <Flex paddingBottom="1em" backgroundColor={useColorModeValue('gray.200', 'gray.800')}>
      <Box textAlign="left">
        <HamburgerMenu menuOpen={menuOpen} onClick={onClick} />
      </Box>
      <Spacer />
      <Box textAlign="center">
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
}

const MainLayout: React.FC<ILayoutProps> = ({ children, menuOpen }) => {
  return (
    <Flex>
      <Box position="relative">
        <Box display={menuOpen ? 'initial' : 'none'} position="absolute" top={0} left={0} zIndex={1500}>
          <LeftNav />
        </Box>
      </Box>
      <Box width="100%">{children}</Box>
    </Flex>
  );
};

export class LayoutMain extends React.Component<any, ILayoutMainState> {
  constructor(props: any) {
    super(props);

    this.state = { menuOpen: false };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick(event: React.MouseEvent<HTMLButtonElement>) {
    const { menuOpen } = this.state;
    this.setState({ menuOpen: !menuOpen });
  }

  render() {
    return (
      <PageLayout>
        <TopNav menuOpen={this.state.menuOpen} onClick={this.handleHamburgerClick} />
        <MainLayout menuOpen={this.state.menuOpen}>{this.props.children}</MainLayout>
        <Footer />
      </PageLayout>
    );
  }
}
