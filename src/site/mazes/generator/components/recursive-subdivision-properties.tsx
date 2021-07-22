import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputText } from '../../../../lib/components';

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

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(
      event.currentTarget.id,
      parseInt(event.currentTarget.value)
    );
  }

  render() {
    return (
      <>
        <Wrap>
          <WrapItem>
            <InputText
              id="chanceForRoom"
              label="Chance for Room"
              tooltip="The percentage chance the current set of cells will no longer be subdivided into smaller sets. If the maximum number of rooms has been reached or the set of cells does not fit into the room size criteria, then this field is disregarded."
              placeholder="Chance for Room"
              value={this.props.data.chanceForRoom}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="maxRooms"
              label="Max Rooms"
              tooltip="The maximum number of rooms that will be created. This does not guarantee that this number of rooms will be generated."
              placeholder="Max Rooms"
              value={this.props.data.maxRooms}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputText
              id="minRoomWidth"
              label="Minimum Room Width"
              tooltip="The minimum room width measured in cells."
              placeholder="Minimum Room Width"
              value={this.props.data.minRoomWidth}
              onChange={this.handleInputChange}
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="minRoomHeight"
              label="Minimum Room Height"
              tooltip="The minimum room height measured in cells."
              placeholder="Minimum Room Height"
              value={this.props.data.minRoomHeight}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputText
              id="maxRoomWidth"
              label="Maximum Room Width"
              tooltip="The maximum room width measured in cells."
              placeholder="Maximum Room Width"
              value={this.props.data.maxRoomWidth}
              onChange={this.handleInputChange}
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="maxRoomHeight"
              label="Maximum Room Height"
              tooltip="The maximum room height measured in cells."
              placeholder="Maximum Room Height"
              value={this.props.data.maxRoomHeight}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
