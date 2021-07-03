import React from 'react';

import { Box, Grid, GridItem, Heading, SimpleGrid } from '@chakra-ui/react';

import { ColorModeSwitcher } from './color-mode-switcher';
import { LeftNav } from './left-nav';

export const LayoutMain: React.FC = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <SimpleGrid paddingBottom="1em" rows={1} minChildWidth="5em">
        <GridItem textAlign="left">
          <Heading size="xl" paddingLeft=".5em">
            Micah's Musings
          </Heading>
        </GridItem>
        <GridItem textAlign="right">
          <ColorModeSwitcher justifySelf="flex-end" />
        </GridItem>
      </SimpleGrid>

      <Grid minH="100vh" p={3} templateColumns="repeat(12, 1fr)">
        <GridItem colSpan={2}>
          <LeftNav />
        </GridItem>
        <GridItem colSpan={10}>{children}</GridItem>
      </Grid>
    </Box>
  );
};
