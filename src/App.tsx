import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RouterMain } from './site/router/router-main';
import { BrowserRouter } from 'react-router-dom';

export const App = () => (
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <RouterMain />
    </ChakraProvider>
  </BrowserRouter>
);
