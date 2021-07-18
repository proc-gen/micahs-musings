import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import { GrowingTreeData } from '../../../../lib/mazes';

export interface IGrowingTreeProps {
  data: GrowingTreeData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IGrowingTreeState {}

export class GrowingTreeProperties extends React.Component<
  IGrowingTreeProps,
  IGrowingTreeState
> {
  constructor(props: IGrowingTreeProps) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value);
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value);
  }

  render() {
    return (
      <>
        <SimpleGrid columns={3} spacing="1em" paddingBottom="1em">
          <FormControl id="setStartPosition">
            <FormLabel>Set Start Position</FormLabel>
            <Select
              name="setStartPosition"
              placeHolder="Set Start Position"
              value={this.props.data.setStartPosition.toString()}
              onChange={this.handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </Select>
          </FormControl>
          <FormControl id="startPosX">
            <FormLabel>Start X Position</FormLabel>
            <Input
              name="startPosX"
              placeholder="Start X Position"
              value={this.props.data.startPosX}
              onChange={this.handleInputChange}
              disabled={!this.props.data.setStartPosition}
            />
          </FormControl>
          <FormControl id="startPosY">
            <FormLabel>Start Y Position</FormLabel>
            <Input
              name="startPosY"
              placeholder="Start Y Position"
              value={this.props.data.startPosY}
              onChange={this.handleInputChange}
              disabled={!this.props.data.setStartPosition}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="treeGrammar">
            <FormLabel>Tree Grammar</FormLabel>
            <Input
              name="treeGrammar"
              placeholder="Tree Grammar"
              value={this.props.data.treeGrammar}
              onChange={this.handleInputChange}
            />
          </FormControl>
          <Text fontSize="small" margin="1em">
            <ul>
              <li>F - First cell in list</li>
              <li>L - Last cell in list</li>
              <li>R - Random cell from list</li>
            </ul>
          </Text>
        </SimpleGrid>
      </>
    );
  }
}
