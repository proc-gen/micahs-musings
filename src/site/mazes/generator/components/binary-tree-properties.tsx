import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';

import { BinaryTreeData } from '../../../../lib/mazes';

export interface IBinaryTreeProps {
  data: BinaryTreeData;
  handleChange: (fieldName: string, value: number) => void;
}

export interface IBinaryTreeState {}

export class BinaryTreeProperties extends React.Component<
  IBinaryTreeProps,
  IBinaryTreeState
> {
  constructor(props: IBinaryTreeProps) {
    super(props);
    this.state = {};

    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleChanceVerticalChange =
      this.handleChanceVerticalChange.bind(this);
  }

  handleDirectionsChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange('direction', parseInt(event.currentTarget.value));
  }

  handleChanceVerticalChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'chanceVertical',
      parseInt(event.currentTarget.value)
    );
  }

  render() {
    return (
      <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
        <FormControl id="directions">
          <FormLabel>Direction Choices</FormLabel>
          <Select
            name="directions"
            placeHolder="Directions"
            value={this.props.data.direction}
            onChange={this.handleDirectionsChange}
          >
            <option value="1">North & East</option>
            <option value="2">South & East</option>
            <option value="3">South & West</option>
            <option value="4">North & West</option>
          </Select>
        </FormControl>
        <FormControl id="chanceVertical">
          <FormLabel>Vertical Chance</FormLabel>
          <Input
            name="chanceVertical"
            placeholder="Vertical Chance"
            value={this.props.data.chanceVertical}
            onChange={this.handleChanceVerticalChange}
          />
        </FormControl>
      </SimpleGrid>
    );
  }
}
