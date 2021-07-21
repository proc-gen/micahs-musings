import React from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';

import { InputSelect, InputText } from '../../../../lib/components';

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
          <InputSelect
            id="setStartPosition"
            label="Set Start Position"
            tooltip="Sets whether the start position should be set with parameters or chosen at random."
            value={this.props.data.setStartPosition.toString()}
            onChange={this.handleSelectChange}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </InputSelect>

          <InputText
            id="startPosX"
            label="Start X Position"
            tooltip="The x-coordinate for the cell used to start generation."
            placeholder="Start X Position"
            value={this.props.data.startPosX}
            onChange={this.handleInputChange}
          />
          <InputText
            id="startPosY"
            label="Start Y Position"
            tooltip="The y-coordinate for the cell used to start generation."
            placeholder="Start Y Position"
            value={this.props.data.startPosY}
            onChange={this.handleInputChange}
          />
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <InputText
            id="treeGrammar"
            label="Tree Grammar"
            tooltip="The grammar used for generation. The order of the grammar will be repeated until the entire maze is generated."
            placeholder="Tree Grammar"
            value={this.props.data.treeGrammar}
            onChange={this.handleInputChange}
          />
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
