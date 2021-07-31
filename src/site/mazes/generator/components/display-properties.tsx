import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import { InputSelect } from '../../../../lib/components';

import { DisplayData } from '../../../../lib/mazes';

export interface IDisplayProps {
  data: DisplayData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IDisplayState {}

export class DisplayProperties extends React.Component<IDisplayProps, IDisplayState> {
  constructor(props: IDisplayProps) {
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
              id="cellDimension"
              label="Cell Dimension"
              tooltip="The width and height of each cell in the generated image."
              value={this.props.data.cellDimension}
              onChange={this.handleSelectChange}
            >
              <option value="8">8 pixels</option>
              <option value="16">16 pixels</option>
              <option value="24">24 pixels</option>
              <option value="32">32 pixels</option>
              <option value="40">40 pixels</option>
              <option value="48">48 pixels</option>
              <option value="56">56 pixels</option>
              <option value="64">64 pixels</option>
            </InputSelect>
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputSelect
              id="wallColorName"
              label="Wall Color"
              tooltip="The color of the divisions between cells in the maze."
              value={this.props.data.wallColorName}
              onChange={this.handleSelectChange}
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </InputSelect>
          </WrapItem>

          <WrapItem>
            <InputSelect
              id="floorColorName"
              label="Floor Color"
              tooltip="The color of the interior of cells in the maze."
              value={this.props.data.floorColorName}
              onChange={this.handleSelectChange}
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </InputSelect>
          </WrapItem>
          <WrapItem>
            <InputSelect
              id="clearColorName"
              label="Clear Color"
              tooltip="The color of the area outside the maze."
              value={this.props.data.clearColorName}
              onChange={this.handleSelectChange}
            >
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </InputSelect>
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
