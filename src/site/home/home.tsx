import React from 'react';
import { SimpleGrid, Text, Container } from '@chakra-ui/react';

import {
  LinkButton,
  Thumbnail,
  Card,
  CardBody,
  CardHeader,
} from '../../lib/components';

import MoltenTeapot from './images/molten-teapot.jpg';
import NoiseTerrain from './images/multiple-noise-terrain.jpg';
import MazeGenerator from './images/maze-generator.png';
import SpaceMaze from './images/3-d-maze.png';

export const Home: React.FC = () => {
  return (
    <>
      <Container maxW="container.lg">
        <SimpleGrid columns={2} spacing="5em" padding="1em">
          <Thumbnail source={MoltenTeapot} altText="Molten Teapot" />
          <Thumbnail source={NoiseTerrain} altText="Terrain Generation" />
        </SimpleGrid>
        <Card maxW="container.lg" centered>
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
      </Container>
    </>
  );
};
