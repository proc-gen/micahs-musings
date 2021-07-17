import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

import { LinkButton } from '../../lib/components/link-button';
import { Thumbnail } from '../../lib/components/thumbnail';
import { Card } from '../../lib/components/card';
import { CardBody } from '../../lib/components/card-body';
import { CardHeader } from '../../lib/components/card-header';

import MoltenTeapot from './images/molten-teapot.jpg';
import NoiseTerrain from './images/multiple-noise-terrain.jpg';
import MazeGenerator from './images/maze-generator.png';
import SpaceMaze from './images/3-d-maze.png';

export const Home: React.FC = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing="5em" padding="1em">
        <Thumbnail source={MoltenTeapot} altText="Molten Teapot" />
        <Thumbnail source={NoiseTerrain} altText="Terrain Generation" />
      </SimpleGrid>
      <Card maxW="container.lg" width="container.lg" centered>
        <CardHeader>Welcome!</CardHeader>
        <CardBody>
          <Text>
            I made this website to share things that I've worked on because
            they're cool, interesting, or just meant to make you think. Enjoy!
          </Text>
          <SimpleGrid columns={2} spacing="1em" padding="1em">
            <LinkButton href="/mazes" text="Mazes" />
            <LinkButton href="/writing" text="Writing" />
          </SimpleGrid>
        </CardBody>
      </Card>

      <SimpleGrid columns={2} spacing="5em" padding="1em">
        <Thumbnail source={MazeGenerator} altText="Maze Generator" />
        <Thumbnail source={SpaceMaze} altText="3D Maze" />
      </SimpleGrid>
    </>
  );
};
