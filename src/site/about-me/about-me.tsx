import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';

export const AboutMe: React.FC = () => {
  return (
    <Box padding="1em">
      <Heading paddingBottom="0.5em">About Me</Heading>
      <Text>Texty text.</Text>
    </Box>
  );
};
