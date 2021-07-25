import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputSelect, InputText } from '../../../../lib/components';

import { EllerData } from '../../../../lib/mazes';

export interface IEllerProps {
  data: EllerData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IEllerState {}

export class EllerProperties extends React.Component<IEllerProps, IEllerState> {
  constructor(props: IEllerProps) {
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
              id="sidewaysDirection"
              label="Sideways Direction"
              tooltip="Sets the direction considered to be sideways."
              value={this.props.data.sidewaysDirection}
              onChange={this.handleSelectChange}
            >
              <option value="0">North</option>
              <option value="1">East</option>
              <option value="2">South</option>
              <option value="3">West</option>
            </InputSelect>
          </WrapItem>
          <WrapItem>
            <InputSelect
              id="verticalDirection"
              label="Vertical Direction"
              tooltip="Sets vertical direction that is perpendicular to the sideways direction."
              value={this.props.data.verticalDirection}
              onChange={this.handleSelectChange}
            >
              <option value="0">North</option>
              <option value="1">East</option>
              <option value="2">South</option>
              <option value="3">West</option>
            </InputSelect>
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputText
              id="chanceMergeSideways"
              label="Chance to Merge Sideways"
              tooltip="The percent chance that a cell will merge sideways."
              placeholder="Chance to Merge Sideways"
              value={this.props.data.chanceMergeSideways}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="chanceMergeDown"
              label="Chance to Merge Vertically"
              tooltip="The percent chance that a cell will merge vertically."
              placeholder="Chance to Merge Vertically"
              value={this.props.data.chanceMergeDown}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
