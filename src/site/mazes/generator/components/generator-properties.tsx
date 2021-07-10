import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
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
    this.handleSeedChange = this.handleSeedChange.bind(this);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
  }

  handleGeneratorChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange('generator', parseInt(event.currentTarget.value));
  }

  handleSeedChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange('seed', parseInt(event.currentTarget.value));
  }

  handleWidthChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange('width', parseInt(event.currentTarget.value));
  }

  handleHeightChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange('height', parseInt(event.currentTarget.value));
  }

  render() {
    return (
      <>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="generator">
            <FormLabel>Generator</FormLabel>
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
            <FormLabel>Seed</FormLabel>
            <Input
              name="seed"
              placeholder="Seed"
              value={this.props.data.seed}
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
              value={this.props.data.width}
              onChange={this.handleWidthChange}
            />
          </FormControl>
          <FormControl id="height">
            <FormLabel>Height</FormLabel>
            <Input
              name="height"
              placeholder="Height"
              value={this.props.data.height}
              onChange={this.handleHeightChange}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  }
}
