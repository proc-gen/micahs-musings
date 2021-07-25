import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputSelect, InputText } from '../../../../lib/components';

import { AldousBroderData } from '../../../../lib/mazes';

export interface IAldousBroderProps {
  data: AldousBroderData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IAldousBroderState {}

export class AldousBroderProperties extends React.Component<IAldousBroderProps, IAldousBroderState> {
  constructor(props: IAldousBroderProps) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value);
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(event.currentTarget.id, parseInt(event.currentTarget.value));
  }

  render() {
    return (
      <>
        <Wrap>
          <WrapItem>
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
          </WrapItem>
          <WrapItem>
            <InputText
              id="startPosX"
              label="Start X Position"
              tooltip="The x-coordinate for the cell used to start generation."
              placeholder="Start X Position"
              value={this.props.data.startPosX}
              onChange={this.handleInputChange}
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="startPosY"
              label="Start Y Position"
              tooltip="The y-coordinate for the cell used to start generation."
              placeholder="Start Y Position"
              value={this.props.data.startPosY}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
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
          </WrapItem>
        </Wrap>
        <Wrap
          visibility={this.props.data.directionBias === 'Cardinal' ? 'initial' : 'hidden'}
          display={this.props.data.directionBias === 'Cardinal' ? 'flex' : 'none'}
        >
          <WrapItem>
            <InputText
              id="northChance"
              label="North Chance"
              tooltip="The percentage chance that North will be chosen."
              placeholder="North Chance"
              value={this.props.data.northChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="eastChance"
              label="East Chance"
              tooltip="The percentage chance that East will be chosen."
              placeholder="East Chance"
              value={this.props.data.eastChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="southChance"
              label="South Chance"
              tooltip="The percentage chance that South will be chosen."
              placeholder="South Chance"
              value={this.props.data.southChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="westChance"
              label="West Chance"
              tooltip="The percentage chance that West will be chosen."
              placeholder="West Chance"
              value={this.props.data.westChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
        </Wrap>
        <Wrap
          visibility={this.props.data.directionBias === 'Turn' ? 'initial' : 'hidden'}
          display={this.props.data.directionBias === 'Turn' ? 'flex' : 'none'}
        >
          <WrapItem>
            <InputText
              id="forwardChance"
              label="Forward Chance"
              tooltip="The percentage chance that moving forward will be chosen."
              placeholder="Forward Chance"
              value={this.props.data.forwardChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="leftChance"
              label="Left Chance"
              tooltip="The percentage chance that a left turn will be chosen."
              placeholder="Left Chance"
              value={this.props.data.leftChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="rightChance"
              label="Right Chance"
              tooltip="The percentage chance that a right turn will be chosen."
              placeholder="Right Chance"
              value={this.props.data.rightChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="backwardChance"
              label="Backward Chance"
              tooltip="The percentage chance that the previous cell will be chosen."
              placeholder="Backward Chance"
              value={this.props.data.backwardChance}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
