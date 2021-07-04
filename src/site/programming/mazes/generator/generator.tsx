import React from 'react';

import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Canvas } from '../../../../lib/mazes/canvas';
import { BinaryTree } from '../../../../lib/mazes/binarytree';
import { Image } from '../../../../lib/mazes/image';

interface IGeneratorState {
  imgData: Image;
  seed: number;
  generator: number;
  width: number;
  height: number;
}

export class Generator extends React.Component<any, IGeneratorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      imgData: new Image(1, 1),
      seed: 1337,
      generator: 1,
      width: 10,
      height: 10,
    };
    this.handleGeneratorChange = this.handleGeneratorChange.bind(this);
    this.handleSeedChange = this.handleSeedChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  componentDidMount() {
    const maze: BinaryTree = new BinaryTree(
      this.state.width,
      this.state.height,
      4,
      this.state.seed,
      0,
      0
    );
    maze.RunGenerator();
    this.setState({ imgData: maze.Display(64) });
  }

  generate = () => {
    const maze: BinaryTree = new BinaryTree(
      this.state.width,
      this.state.height,
      4,
      this.state.seed,
      0,
      0
    );
    maze.RunGenerator();
    this.setState({ imgData: maze.Display(64) });
  };

  handleGeneratorChange(event: React.FormEvent<HTMLSelectElement>) {
    this.setState({ generator: parseInt(event.currentTarget.value) });
  }

  handleSeedChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ seed: parseInt(event.currentTarget.value) });
  }

  handleWidthChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ width: parseInt(event.currentTarget.value) });
  }

  handleHeightChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({ height: parseInt(event.currentTarget.value) });
  }

  render() {
    return (
      <Box padding="1em">
        <Heading paddingBottom="0.5em">Mazes - Generator</Heading>

        <Container padding="1em">
          <Text textAlign="left" padding="1em">
            <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
              <FormControl id="generator">
                <FormLabel>Generator</FormLabel>
                <Select
                  name="generator"
                  placeHolder="Select Generator"
                  value={this.state.generator}
                  onChange={this.handleGeneratorChange}
                >
                  <option value="1">Binary Tree</option>
                  <option value="2">Sidewinder</option>
                </Select>
              </FormControl>
              <FormControl id="seed">
                <FormLabel>Seed</FormLabel>
                <Input
                  name="seed"
                  placeholder="Seed"
                  value={this.state.seed}
                  onChange={this.handleSeedChange}
                />
              </FormControl>
            </SimpleGrid>
            <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
              <FormControl id="width">
                <FormLabel>Width</FormLabel>
                <Input
                  name="width"
                  placeholder="Width"
                  value={this.state.width}
                  onChange={this.handleWidthChange}
                />
              </FormControl>
              <FormControl id="height">
                <FormLabel>Height</FormLabel>
                <Input
                  name="height"
                  placeholder="Height"
                  value={this.state.height}
                  onChange={this.handleHeightChange}
                />
              </FormControl>
            </SimpleGrid>
          </Text>
          <Button onClick={() => this.generate()}>Generate</Button>
        </Container>
        <Container
          maxWidth="container.lg"
          maxHeight="container.lg"
          overflow="scroll"
          padding="1em"
        >
          <Canvas id="mazeCanvas" imgData={this.state.imgData}></Canvas>
        </Container>
      </Box>
    );
  }
}
