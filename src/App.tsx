import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import { RouterMain } from './site/router/router-main';
import { BrowserRouter } from 'react-router-dom';
import IsDev from './lib/helpers/check-environment';
export const App = () => (
  <BrowserRouter basename={IsDev() ? '/' : '/micahs-musings'}>
    <ChakraProvider theme={theme}>
      <RouterMain />
    </ChakraProvider>
  </BrowserRouter>
);
