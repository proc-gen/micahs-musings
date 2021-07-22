import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputSelect, InputText } from '../../../../lib/components';

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
      <Wrap>
        <WrapItem>
          <InputSelect
            id="direction"
            label="Directions"
            tooltip="Sets the two direction choices used."
            value={this.props.data.direction}
            onChange={this.handleDirectionsChange}
          >
            <option value="1">North & East</option>
            <option value="2">South & East</option>
            <option value="3">South & West</option>
            <option value="4">North & West</option>
          </InputSelect>
        </WrapItem>
        <WrapItem>
          <InputText
            id="chanceVertical"
            label="Vertical Chance"
            tooltip="The percentage chance that the North/South direction will be chosen."
            placeholder="Vertical Chance"
            value={this.props.data.chanceVertical}
            onChange={this.handleChanceVerticalChange}
            rightAddon="%"
          />
        </WrapItem>
      </Wrap>
    );
  }
}
