import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';

import { RecursiveSubdivisionData } from '../../../../lib/mazes';

export interface IRecursiveSubdivisionProps {
  data: RecursiveSubdivisionData;
  handleChange: (fieldName: string, value: number) => void;
}

export interface IRecursiveSubdivisionState {}

export class RecursiveSubdivisionProperties extends React.Component<
  IRecursiveSubdivisionProps,
  IRecursiveSubdivisionState
> {
  constructor(props: IRecursiveSubdivisionProps) {
    super(props);
    this.state = {};

    this.handleMaxRoomsChange = this.handleMaxRoomsChange.bind(this);
    this.handleMaxRoomWidthChange = this.handleMaxRoomWidthChange.bind(this);
    this.handleMinRoomWidthChange = this.handleMinRoomWidthChange.bind(this);
    this.handleMaxRoomHeightChange = this.handleMaxRoomHeightChange.bind(this);
    this.handleMinRoomHeightChange = this.handleMinRoomHeightChange.bind(this);
    this.handleChanceForRoomChange = this.handleChanceForRoomChange.bind(this);
  }

  handleMaxRoomsChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange('maxRooms', parseInt(event.currentTarget.value));
  }

  handleMaxRoomWidthChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'maxRoomWidth',
      parseInt(event.currentTarget.value)
    );
  }

  handleMinRoomWidthChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'minRoomWidth',
      parseInt(event.currentTarget.value)
    );
  }

  handleMaxRoomHeightChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'maxRoomHeight',
      parseInt(event.currentTarget.value)
    );
  }

  handleMinRoomHeightChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'minRoomHeight',
      parseInt(event.currentTarget.value)
    );
  }

  handleChanceForRoomChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      'chanceForRoom',
      parseInt(event.currentTarget.value)
    );
  }

  render() {
    return (
      <>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="chanceForRoom">
            <FormLabel>Chance for Room</FormLabel>
            <InputGroup>
              <Input
                name="chanceForRoom"
                placeholder="Chance for Room"
                value={this.props.data.chanceForRoom}
                onChange={this.handleChanceForRoomChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
          <FormControl id="maxRooms">
            <FormLabel>Max Rooms</FormLabel>
            <Input
              name="maxRooms"
              placeholder="Max Rooms"
              value={this.props.data.maxRooms}
              onChange={this.handleMaxRoomsChange}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="minRoomWidth">
            <FormLabel>Minimum Room Width</FormLabel>
            <Input
              name="minRoomWidth"
              placeholder="Minimum Room Width"
              value={this.props.data.minRoomWidth}
              onChange={this.handleMinRoomWidthChange}
            />
          </FormControl>
          <FormControl id="minRoomHeight">
            <FormLabel>Minimum Room Height</FormLabel>
            <Input
              name="minRoomHeight"
              placeholder="Minimum Room Height"
              value={this.props.data.minRoomHeight}
              onChange={this.handleMinRoomHeightChange}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <FormControl id="maxRoomWidth">
            <FormLabel>Maximum Room Width</FormLabel>
            <Input
              name="maxRoomWidth"
              placeholder="Maximum Room Width"
              value={this.props.data.maxRoomWidth}
              onChange={this.handleMaxRoomWidthChange}
            />
          </FormControl>
          <FormControl id="maxRoomHeight">
            <FormLabel>Maximum Room Height</FormLabel>
            <Input
              name="maxRoomHeight"
              placeholder="Maximum Room Height"
              value={this.props.data.maxRoomHeight}
              onChange={this.handleMaxRoomHeightChange}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  }
}
