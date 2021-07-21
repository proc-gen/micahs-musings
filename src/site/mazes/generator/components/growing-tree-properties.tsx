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
        <SimpleGrid columns={3} spacing="1em" paddingBottom="1em">
          <InputSelect
            id="directionBias"
            label="Direction Bias"
            tooltip="Sets whether the direction bias should be based on the cardinal directions or based on direction compared to the previous cell."
            value={this.props.data.directionBias.toString()}
            onChange={this.handleSelectChange}
          >
            <option value="Cardinal">Cardinal</option>
            <option value="Turn">Turn</option>
          </InputSelect>
        </SimpleGrid>
        <SimpleGrid
          columns={4}
          spacing="1em"
          paddingBottom="1em"
          visibility={
            this.props.data.directionBias === 'Cardinal' ? 'initial' : 'hidden'
          }
          display={
            this.props.data.directionBias === 'Cardinal' ? 'grid' : 'none'
          }
        >
          <InputText
            id="northChance"
            label="North Chance"
            tooltip="The percentage chance that North will be chosen."
            placeholder="North Chance"
            value={this.props.data.northChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="eastChance"
            label="East Chance"
            tooltip="The percentage chance that East will be chosen."
            placeholder="East Chance"
            value={this.props.data.eastChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="southChance"
            label="South Chance"
            tooltip="The percentage chance that South will be chosen."
            placeholder="South Chance"
            value={this.props.data.southChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="westChance"
            label="West Chance"
            tooltip="The percentage chance that West will be chosen."
            placeholder="West Chance"
            value={this.props.data.westChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
        </SimpleGrid>
        <SimpleGrid
          columns={3}
          spacing="1em"
          paddingBottom="1em"
          visibility={
            this.props.data.directionBias === 'Turn' ? 'initial' : 'hidden'
          }
          display={this.props.data.directionBias === 'Turn' ? 'grid' : 'none'}
        >
          <InputText
            id="forwardChance"
            label="Forward Chance"
            tooltip="The percentage chance that moving forward will be chosen."
            placeholder="Forward Chance"
            value={this.props.data.forwardChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="leftChance"
            label="Left Chance"
            tooltip="The percentage chance that a left turn will be chosen."
            placeholder="Left Chance"
            value={this.props.data.leftChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="rightChance"
            label="Right Chance"
            tooltip="The percentage chance that a right turn will be chosen."
            placeholder="Right Chance"
            value={this.props.data.rightChance}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
        </SimpleGrid>
      </>
    );
  }
}
