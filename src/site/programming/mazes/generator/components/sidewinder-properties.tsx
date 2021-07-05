import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
} from '@chakra-ui/react';

import { SidewinderData } from '../../../../../lib/mazes/sidewinder';

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
    this.props.handleChange(
      'chanceVertical',
      parseInt(event.currentTarget.value)
    );
  }

  render() {
    return (
      <>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="sideDirection">
            <FormLabel>Side Direction</FormLabel>
            <Select
              name="sideDirection"
              placeHolder="Side Direction"
              value={this.props.data.sideDirection}
              onChange={this.handleSideDirectionChange}
            >
              <option value="0">North</option>
              <option value="1">East</option>
              <option value="2">South</option>
              <option value="3">West</option>
            </Select>
          </FormControl>
          <FormControl id="windDirection">
            <FormLabel>Wind Direction</FormLabel>
            <Select
              name="windDirection"
              placeHolder="Wind Direction"
              value={this.props.data.windDirection}
              onChange={this.handleWindDirectionChange}
            >
              <option value="0">North</option>
              <option value="1">East</option>
              <option value="2">South</option>
              <option value="3">West</option>
            </Select>
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="chanceWind">
            <FormLabel>Wind Chance</FormLabel>
            <Input
              name="chanceWind"
              placeholder="Wind Chance"
              value={this.props.data.chanceWind}
              onChange={this.handleChanceWindChange}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  }
}
