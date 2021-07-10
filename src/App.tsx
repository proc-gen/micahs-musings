import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RouterMain } from './site/router/router-main';
import { HashRouter } from 'react-router-dom';
import IsDev from './lib/helpers/check-environment';
export const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <ChakraProvider theme={theme}>
      <RouterMain />
    </ChakraProvider>
  </HashRouter>
);
