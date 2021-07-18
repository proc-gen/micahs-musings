import React from 'react';
import {
  Input,
  InputGroup,
  InputRightAddon,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';

import { GeneratorData } from '../../../../lib/mazes';

export interface IGeneratorProps {
  data: GeneratorData;
  handleChange: (fieldName: string, value: number) => void;
}

export interface IGeneratorState {}

export class GeneratorProperties extends React.Component<
  IGeneratorProps,
  IGeneratorState
> {
  constructor(props: IGeneratorProps) {
    super(props);
    this.state = {};

    this.handleGeneratorChange = this.handleGeneratorChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleGeneratorChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange('generator', parseInt(event.currentTarget.value));
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      event.currentTarget.id,
      parseInt(event.currentTarget.value)
    );
  }

  render() {
    return (
      <>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="generator">
            <Tooltip label="The base algorithm used by the maze generator. Go to Mazes/Algorithms in the left navigation for more information about a specific generator.">
              <FormLabel>Generator</FormLabel>
            </Tooltip>

            <Select
              name="generator"
              placeHolder="Select Generator"
              value={this.props.data.generator}
              onChange={this.handleGeneratorChange}
            >
              <option value="1">Binary Tree</option>
              <option value="2">Sidewinder</option>
              <option value="3">Aldous-Broder</option>
              <option value="4">Wilson's</option>
              <option value="5">Hunt and Kill</option>
              <option value="6">Recursive Backtracker</option>
              <option value="7">Kruskal's</option>
              <option value="8">Prim's</option>
              <option value="9">Growing Tree</option>
              <option value="10">Eller's</option>
              <option value="11">Recursive Subdivision</option>
            </Select>
          </FormControl>
          <FormControl id="seed">
            <Tooltip label="The seed used by the random number generator.">
              <FormLabel>Seed</FormLabel>
            </Tooltip>
            <Input
              name="seed"
              placeholder="Seed"
              value={this.props.data.seed}
              onChange={this.handleInputChange}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={4} spacing="1em" paddingBottom="1em">
          <FormControl id="width">
            <Tooltip label="The width of the maze to be generated.">
              <FormLabel>Width</FormLabel>
            </Tooltip>
            <Input
              name="width"
              placeholder="Width"
              value={this.props.data.width}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <FormControl id="height">
            <Tooltip label="The height of the maze to be generated.">
              <FormLabel>Height</FormLabel>
            </Tooltip>
            <Input
              name="height"
              placeholder="Height"
              value={this.props.data.height}
              onChange={this.handleInputChange}
            />
          </FormControl>

          <FormControl id="weave">
            <Tooltip label="The percentage chance that a cell that fits the criteria for weaving is woven.">
              <FormLabel>Weave</FormLabel>
            </Tooltip>
            <InputGroup>
              <Input
                name="weave"
                placeholder="Weave"
                value={this.props.data.weave}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
          <FormControl id="cullDeadEnds">
            <Tooltip label="The number of dead ends to be removed after the maze has been generated. At least one cell will always remain at the end of generation.">
              <FormLabel>Cull Dead Ends</FormLabel>
            </Tooltip>
            <Input
              name="cullDeadEnds"
              placeholder="Cull Dead Ends"
              value={this.props.data.cullDeadEnds}
              onChange={this.handleInputChange}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  }
}
