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
import { Canvas } from '../../../lib/components/canvas';
import { GeneratorProperties } from './components/generator-properties';
import { BinaryTreeProperties } from './components/binary-tree-properties';
import { SidewinderProperties } from './components/sidewinder-properties';
import { RecursiveSubdivisionProperties } from './components/recursive-subdivision-properties';

import {
  Generator as MazeGenerator,
  GeneratorData,
  BinaryTree,
  BinaryTreeData,
  Sidewinder,
  SidewinderData,
  Image,
  AldousBroder,
  AldousBroderData,
  Wilson,
  WilsonData,
  HuntAndKill,
  HuntAndKillData,
  RecursiveBacktracker,
  RecursiveBacktrackerData,
  Prim,
  PrimData,
  Kruskal,
  KruskalData,
  GrowingTree,
  GrowingTreeData,
  Eller,
  EllerData,
  RecursiveSubdivision,
  RecursiveSubdivisionData,
} from '../../../lib/mazes';

interface IGeneratorState {
  imgData: Image;
  generatorData: GeneratorData;
  binaryTree: BinaryTreeData;
  sidewinder: SidewinderData;
  aldousBroder: AldousBroderData;
  wilson: WilsonData;
  huntAndKill: HuntAndKillData;
  recursiveBacktracker: RecursiveBacktrackerData;
  kruskal: KruskalData;
  prim: PrimData;
  growingTree: GrowingTreeData;
  eller: EllerData;
  recursiveSubdivision: RecursiveSubdivisionData;
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
      kruskal: new KruskalData(),
      prim: new PrimData(),
      growingTree: new GrowingTreeData(),
      eller: new EllerData(),
      recursiveSubdivision: new RecursiveSubdivisionData(),
    };

    this.handleGeneratorDataChange = this.handleGeneratorDataChange.bind(this);
    this.handleBinaryTreeChange = this.handleBinaryTreeChange.bind(this);
    this.handleSidewinderChange = this.handleSidewinderChange.bind(this);
    this.handleRecursiveSubdivisionChange =
      this.handleRecursiveSubdivisionChange.bind(this);
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
      kruskal,
      prim,
      growingTree,
      eller,
      recursiveSubdivision,
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
      case 7:
        maze = new Kruskal(generatorData, kruskal);
        break;
      case 8:
        maze = new Prim(generatorData, prim);
        break;
      case 9:
        maze = new GrowingTree(generatorData, growingTree);
        break;
      case 10:
        maze = new Eller(generatorData, eller);
        break;
      case 11:
        maze = new RecursiveSubdivision(generatorData, recursiveSubdivision);
        break;
      default:
        maze = new BinaryTree(generatorData, binaryTree);
        break;
    }

    maze.RunGenerator();
    this.setState({ imgData: maze.Display(32) });
  };

  handleGeneratorDataChange(fieldName: string, value: number) {
    let { generatorData } = this.state;
    generatorData[fieldName] = value;
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
      case 7:
        retVal = "Kruskal's";
        break;
      case 8:
        retVal = "Prims's";
        break;
      case 9:
        retVal = 'Growing Tree';
        break;
      case 10:
        retVal = "Eller's";
        break;
      case 11:
        retVal = 'Recursive Subdivision';
        break;
    }
    return retVal;
  }

  handleBinaryTreeChange(fieldName: string, value: number) {
    let { binaryTree } = this.state;
    binaryTree[fieldName] = value;
    this.setState({ binaryTree: binaryTree });
  }

  handleSidewinderChange(fieldName: string, value: number) {
    let { sidewinder } = this.state;
    sidewinder[fieldName] = value;
    this.setState({ sidewinder: sidewinder });
  }

  handleRecursiveSubdivisionChange(fieldName: string, value: number) {
    let { recursiveSubdivision } = this.state;
    recursiveSubdivision[fieldName] = value;
    this.setState({ recursiveSubdivision: recursiveSubdivision });
  }

  getGeneratorSpecificPropertiesElement(): JSX.Element {
    let retElement = <></>;
    const { generatorData } = this.state;

    switch (generatorData.generator) {
      case 1:
        retElement = (
          <BinaryTreeProperties
            data={this.state.binaryTree}
            handleChange={this.handleBinaryTreeChange}
          />
        );
        break;
      case 2:
        retElement = (
          <SidewinderProperties
            data={this.state.sidewinder}
            handleChange={this.handleSidewinderChange}
          />
        );
        break;
      case 11:
        retElement = (
          <RecursiveSubdivisionProperties
            data={this.state.recursiveSubdivision}
            handleChange={this.handleRecursiveSubdivisionChange}
          />
        );
        break;
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
          width="100%"
          maxHeight="512px"
          textAlign="center"
          overflow="scroll"
          padding="1em"
          css={{
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: '-ms-autohiding-scrollbar',
          }}
        >
          <Center>
            <Canvas id="mazeCanvas" imgData={this.state.imgData}></Canvas>
          </Center>
        </Container>
      </Box>
    );
  }
}
