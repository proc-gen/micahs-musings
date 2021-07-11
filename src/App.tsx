import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RouterMain } from './site/router/router-main';
import { HashRouter } from 'react-router-dom';
export const App = () => (
  <HashRouter>
    <ChakraProvider theme={theme}>
      <RouterMain />
    </ChakraProvider>
  </HashRouter>
);
