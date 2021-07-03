import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';
import { Canvas } from '../../../../lib/mazes/canvas';
import { BinaryTree } from '../../../../lib/mazes/binarytree';

export const Generator: React.FC = () => {
  const maze: BinaryTree = new BinaryTree(10, 10, 4, 1337, 0, 0);
  maze.RunGenerator();
  const imgData = maze.Display(64);
  return (
    <Box padding="1em">
      <Heading paddingBottom="0.5em">Mazes</Heading>
      <Canvas id="mazeCanvas" imgData={imgData}></Canvas>

      <Text>Texty text.</Text>
    </Box>
  );
};
