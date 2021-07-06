import React from 'react';

import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Center,
} from '@chakra-ui/react';
import { Canvas } from '../../../../lib/mazes/canvas';
import {
  Generator as MazeGenerator,
  GeneratorData,
} from '../../../../lib/mazes/generator';
import { BinaryTree, BinaryTreeData } from '../../../../lib/mazes/binary-tree';
import { Sidewinder, SidewinderData } from '../../../../lib/mazes/sidewinder';
import { Image } from '../../../../lib/mazes/image';
import { GeneratorProperties } from './components/generator-properties';
import { BinaryTreeProperties } from './components/binary-tree-properties';
import { SidewinderProperties } from './components/sidewinder-properties';
import {
  AldousBroder,
  AldousBroderData,
} from '../../../../lib/mazes/aldous-broder';
import { Wilson, WilsonData } from '../../../../lib/mazes/wilson';
import {
  HuntAndKill,
  HuntAndKillData,
} from '../../../../lib/mazes/hunt-and-kill';
import {
  RecursiveBacktracker,
  RecursiveBacktrackerData,
} from '../../../../lib/mazes/recursive-backtracker';

interface IGeneratorState {
  imgData: Image;
  generatorData: GeneratorData;
  binaryTree: BinaryTreeData;
  sidewinder: SidewinderData;
  aldousBroder: AldousBroderData;
  wilson: WilsonData;
  huntAndKill: HuntAndKillData;
  recursiveBacktracker: RecursiveBacktrackerData;
}

export class Generator extends React.Component<any, IGeneratorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      imgData: new Image(1, 1),
      generatorData: new GeneratorData(),
      binaryTree: new BinaryTreeData(),
      sidewinder: new SidewinderData(),
      aldousBroder: new AldousBroderData(),
      wilson: new WilsonData(),
      huntAndKill: new HuntAndKillData(),
      recursiveBacktracker: new RecursiveBacktrackerData(),
    };

    this.handleGeneratorDataChange = this.handleGeneratorDataChange.bind(this);
    this.handleBinaryTreeChange = this.handleBinaryTreeChange.bind(this);
    this.handleSidewinderChange = this.handleSidewinderChange.bind(this);
  }

  generate = () => {
    let maze: MazeGenerator;
    const {
      binaryTree,
      sidewinder,
      aldousBroder,
      wilson,
      huntAndKill,
      recursiveBacktracker,
      generatorData,
    } = this.state;

    switch (generatorData.generator) {
      case 1:
        maze = new BinaryTree(generatorData, binaryTree);
        break;
      case 2:
        maze = new Sidewinder(generatorData, sidewinder);
        break;
      case 3:
        maze = new AldousBroder(generatorData, aldousBroder);
        break;
      case 4:
        maze = new Wilson(generatorData, wilson);
        break;
      case 5:
        maze = new HuntAndKill(generatorData, huntAndKill);
        break;
      case 6:
        maze = new RecursiveBacktracker(generatorData, recursiveBacktracker);
        break;
      default:
        maze = new BinaryTree(generatorData, binaryTree);
        break;
    }

    maze.RunGenerator();
    this.setState({ imgData: maze.Display(64) });
  };

  handleGeneratorDataChange(fieldName: string, value: number) {
    let generatorData = this.state.generatorData;

    switch (fieldName) {
      case 'generator':
        generatorData.generator = value;
        break;
      case 'seed':
        generatorData.seed = value;
        break;
      case 'width':
        generatorData.width = value;
        break;
      case 'height':
        generatorData.height = value;
        break;
    }

    this.setState({ generatorData: generatorData });
  }

  getGeneratorPropertiesTabName(): string {
    let retVal: string = '';
    switch (this.state.generatorData.generator) {
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
      case 5:
        retVal = 'Hunt and Kill';
        break;
      case 6:
        retVal = 'Recursive Backtracker';
        break;
    }
    return retVal;
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

  getGeneratorSpecificPropertiesElement(): JSX.Element {
    let retElement = <></>;

    if (this.state.generatorData.generator === 1) {
      retElement = (
        <BinaryTreeProperties
          data={this.state.binaryTree}
          handleChange={this.handleBinaryTreeChange}
        />
      );
    } else if (this.state.generatorData.generator === 2) {
      retElement = (
        <SidewinderProperties
          data={this.state.sidewinder}
          handleChange={this.handleSidewinderChange}
        />
      );
    }
    return retElement;
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
                  <GeneratorProperties
                    data={this.state.generatorData}
                    handleChange={this.handleGeneratorDataChange}
                  />
                </TabPanel>
                <TabPanel>
                  {this.getGeneratorSpecificPropertiesElement()}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Text>
          <Button onClick={() => this.generate()}>Generate</Button>
        </Container>
        <Container
          maxWidth="container.lg"
          maxHeight="container.lg"
          textAlign="center"
          overflow="scroll"
          padding="1em"
        >
          <Center>
            <Canvas id="mazeCanvas" imgData={this.state.imgData}></Canvas>
          </Center>
        </Container>
      </Box>
    );
  }
}
