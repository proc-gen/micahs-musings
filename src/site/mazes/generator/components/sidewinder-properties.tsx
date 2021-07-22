import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputSelect, InputText } from '../../../../lib/components';

import { SidewinderData } from '../../../../lib/mazes';

export interface ISidewinderProps {
  data: SidewinderData;
  handleChange: (fieldName: string, value: number) => void;
}

export interface ISidewinderState {}

export class SidewinderProperties extends React.Component<
  ISidewinderProps,
  ISidewinderState
> {
  constructor(props: ISidewinderProps) {
    super(props);
    this.state = {};

    this.handleWindDirectionChange = this.handleWindDirectionChange.bind(this);
    this.handleChanceWindChange = this.handleChanceWindChange.bind(this);
    this.handleSideDirectionChange = this.handleSideDirectionChange.bind(this);
  }

  handleSideDirectionChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(
      'sideDirection',
      parseInt(event.currentTarget.value)
    );
  }

  handleWindDirectionChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(
      'windDirection',
      parseInt(event.currentTarget.value)
    );
  }

  handleChanceWindChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange('chanceWind', parseInt(event.currentTarget.value));
  }

  render() {
    return (
      <>
        <Wrap>
          <WrapItem>
            <InputSelect
              id="sideDirection"
              label="Side Direction"
              tooltip="Sets the direction considered to be sideways."
              value={this.props.data.sideDirection}
              onChange={this.handleSideDirectionChange}
            >
              <option value="0">North</option>
              <option value="1">East</option>
              <option value="2">South</option>
              <option value="3">West</option>
            </InputSelect>
          </WrapItem>
          <WrapItem>
            <InputSelect
              id="windDirection"
              label="Wind Direction"
              tooltip="Sets winding direction that is perpendicular to the sideways direction."
              value={this.props.data.windDirection}
              onChange={this.handleWindDirectionChange}
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
              id="chanceWind"
              label="Wind Chance"
              tooltip="The percent chance that the winding direction will be chosen."
              placeholder="Wind Chance"
              value={this.props.data.chanceWind}
              onChange={this.handleChanceWindChange}
              rightAddon="%"
            />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
