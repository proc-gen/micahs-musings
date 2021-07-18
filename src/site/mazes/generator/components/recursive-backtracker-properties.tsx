import React from 'react';
import {
  Input,
  InputGroup,
  InputRightAddon,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react';

import { RecursiveBacktrackerData } from '../../../../lib/mazes';

export interface IRecursiveBacktrackerProps {
  data: RecursiveBacktrackerData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IRecursiveBacktrackerState {}

export class RecursiveBacktrackerProperties extends React.Component<
  IRecursiveBacktrackerProps,
  IRecursiveBacktrackerState
> {
  constructor(props: IRecursiveBacktrackerProps) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value);
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
        <SimpleGrid columns={3} spacing="1em" paddingBottom="1em">
          <FormControl id="setStartPosition">
            <FormLabel>Set Start Position</FormLabel>
            <Select
              name="setStartPosition"
              placeHolder="Set Start Position"
              value={this.props.data.setStartPosition.toString()}
              onChange={this.handleSelectChange}
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </Select>
          </FormControl>
          <FormControl id="startPosX">
            <FormLabel>Start X Position</FormLabel>
            <Input
              name="startPosX"
              placeholder="Start X Position"
              value={this.props.data.startPosX}
              onChange={this.handleInputChange}
              disabled={!this.props.data.setStartPosition}
            />
          </FormControl>
          <FormControl id="startPosY">
            <FormLabel>Start Y Position</FormLabel>
            <Input
              name="startPosY"
              placeholder="Start Y Position"
              value={this.props.data.startPosY}
              onChange={this.handleInputChange}
              disabled={!this.props.data.setStartPosition}
            />
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={3} spacing="1em" paddingBottom="1em">
          <FormControl id="directionBias">
            <FormLabel>Direction Bias</FormLabel>
            <Select
              name="directionBias"
              placeHolder="Direction Bias"
              value={this.props.data.directionBias.toString()}
              onChange={this.handleSelectChange}
            >
              <option value="Cardinal">Cardinal</option>
              <option value="Turn">Turn</option>
            </Select>
          </FormControl>
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
          <FormControl id="northChance">
            <FormLabel>North Chance</FormLabel>
            <InputGroup>
              <Input
                name="northChance"
                placeholder="North Chance"
                value={this.props.data.northChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
          <FormControl id="eastChance">
            <FormLabel>East Chance</FormLabel>
            <InputGroup>
              <Input
                name="eastChance"
                placeholder="East Chance"
                value={this.props.data.eastChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>

          <FormControl id="southChance">
            <FormLabel>South Chance</FormLabel>
            <InputGroup>
              <Input
                name="southChance"
                placeholder="South Chance"
                value={this.props.data.southChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
          <FormControl id="westChance">
            <FormLabel>West Chance</FormLabel>
            <InputGroup>
              <Input
                name="westChance"
                placeholder="West Chance"
                value={this.props.data.westChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
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
          <FormControl id="forwardChance">
            <FormLabel>Forward Chance</FormLabel>
            <InputGroup>
              <Input
                name="forwardChance"
                placeholder="Forward Chance"
                value={this.props.data.forwardChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
          <FormControl id="leftChance">
            <FormLabel>Left Chance</FormLabel>
            <InputGroup>
              <Input
                name="leftChance"
                placeholder="Left Chance"
                value={this.props.data.leftChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>

          <FormControl id="rightChance">
            <FormLabel>Right Chance</FormLabel>
            <InputGroup>
              <Input
                name="rightChance"
                placeholder="Right Chance"
                value={this.props.data.rightChance}
                onChange={this.handleInputChange}
              />
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </>
    );
  }
}
