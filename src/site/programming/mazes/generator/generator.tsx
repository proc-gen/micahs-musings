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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { Canvas } from '../../../../lib/mazes/canvas';
import { Generator as MazeGenerator } from '../../../../lib/mazes/generator';
import { BinaryTree, BinaryTreeData } from '../../../../lib/mazes/binarytree';
import { Sidewinder, SidewinderData } from '../../../../lib/mazes/sidewinder';
import { Image } from '../../../../lib/mazes/image';
import { BinaryTreeProperties } from './components/binary-tree-properties';
import { SidewinderProperties } from './components/sidewinder-properties';
import {
  AldousBroder,
  AldousBroderData,
} from '../../../../lib/mazes/aldous-broder';
import { Wilson, WilsonData } from '../../../../lib/mazes/wilson';

interface IGeneratorState {
  imgData: Image;
  seed: number;
  generator: number;
  width: number;
  height: number;
  binaryTree: BinaryTreeData;
  sidewinder: SidewinderData;
  aldousBroder: AldousBroderData;
  wilson: WilsonData;
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
      binaryTree: new BinaryTreeData(),
      sidewinder: new SidewinderData(),
      aldousBroder: new AldousBroderData(),
      wilson: new WilsonData(),
    };
    this.handleGeneratorChange = this.handleGeneratorChange.bind(this);
    this.handleSeedChange = this.handleSeedChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);

    this.handleBinaryTreeChange = this.handleBinaryTreeChange.bind(this);
    this.handleSidewinderChange = this.handleSidewinderChange.bind(this);
  }

  componentDidMount() {
    const maze: BinaryTree = new BinaryTree(
      this.state.width,
      this.state.height,
      4,
      this.state.seed,
      0,
      0,
      this.state.binaryTree
    );
    maze.RunGenerator();
    this.setState({ imgData: maze.Display(64) });
  }

  generate = () => {
    let maze: MazeGenerator;
    switch (this.state.generator) {
      case 1:
        maze = new BinaryTree(
          this.state.width,
          this.state.height,
          4,
          this.state.seed,
          0,
          0,
          this.state.binaryTree
        );
        break;
      case 2:
        maze = new Sidewinder(
          this.state.width,
          this.state.height,
          4,
          this.state.seed,
          0,
          0,
          this.state.sidewinder
        );
        break;
      case 3:
        maze = new AldousBroder(
          this.state.width,
          this.state.height,
          4,
          this.state.seed,
          0,
          0,
          this.state.aldousBroder
        );
        break;
      case 4:
        //alert('Created Wilson');
        maze = new Wilson(
          this.state.width,
          this.state.height,
          4,
          this.state.seed,
          0,
          0,
          this.state.wilson
        );
        break;
      default:
        maze = new BinaryTree(
          this.state.width,
          this.state.height,
          4,
          this.state.seed,
          0,
          0,
          this.state.binaryTree
        );
        break;
    }

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

  handleBinaryTreeChange(fieldName: string, value: number) {
    let binaryTree = this.state.binaryTree;

    switch (fieldName) {
      case 'directions':
        binaryTree.direction = value;
        break;
      case 'chanceVertical':
        binaryTree.chanceVertical = value;
        break;
    }

    this.setState({ binaryTree: binaryTree });
  }

  getGeneratorPropertiesTabName(): string {
    let retVal: string = '';
    switch (this.state.generator) {
      case 1:
        retVal = 'Binary Tree';
        break;
      case 2:
        retVal = 'Sidewinder';
        break;
      case 3:
        retVal = 'Aldous-Broder';
        break;
      case 4:
        retVal = "Wilson's";
        break;
    }
    return retVal;
  }

  handleSidewinderChange(fieldName: string, value: number) {
    let sidewinder = this.state.sidewinder;

    switch (fieldName) {
      case 'sideDirection':
        sidewinder.sideDirection = value;
        break;
      case 'windDirection':
        sidewinder.windDirection = value;
        break;
      case 'chanceVertical':
        sidewinder.chanceWind = value;
        break;
    }

    this.setState({ sidewinder: sidewinder });
  }

  render() {
    return (
      <Box padding="1em">
        <Heading paddingBottom="0.5em">Mazes - Generator</Heading>

        <Container padding="1em">
          <Text textAlign="left" padding="1em">
            <Tabs variant="enclosed">
              <TabList>
                <Tab>General Properties</Tab>
                <Tab>{this.getGeneratorPropertiesTabName()} Properties</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
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
                        <option value="3">Aldous-Broder</option>
                        <option value="4">Wilson's</option>
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
                </TabPanel>
                <TabPanel>
                  <Box
                    visibility={
                      this.state.generator === 1 ? 'visible' : 'hidden'
                    }
                    display={this.state.generator === 1 ? 'initial' : 'none'}
                  >
                    <BinaryTreeProperties
                      data={this.state.binaryTree}
                      handleChange={this.handleBinaryTreeChange}
                    />
                  </Box>
                  <Box
                    visibility={
                      this.state.generator === 2 ? 'visible' : 'hidden'
                    }
                    display={this.state.generator === 2 ? 'initial' : 'none'}
                  >
                    <SidewinderProperties
                      data={this.state.sidewinder}
                      handleChange={this.handleSidewinderChange}
                    />
                  </Box>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Text>
          <Button onClick={() => this.generate()}>Generate</Button>
        </Container>
        <Container
          maxWidth="container.lg"
          maxHeight="container.lg"
          overflow="scroll"
          padding="1em"
          textAlign="center"
        >
          <Canvas id="mazeCanvas" imgData={this.state.imgData}></Canvas>
        </Container>
      </Box>
    );
  }
}
