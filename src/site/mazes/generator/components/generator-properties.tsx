import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { InputText, InputSelect } from '../../../../lib/components';

import { GeneratorData } from '../../../../lib/mazes';

export interface IGeneratorProps {
  data: GeneratorData;
  handleChange: (fieldName: string, value: number) => void;
}

export interface IGeneratorState {}

export class GeneratorProperties extends React.Component<
  IGeneratorProps,
  IGeneratorState
> {
  constructor(props: IGeneratorProps) {
    super(props);
    this.state = {};

    this.handleGeneratorChange = this.handleGeneratorChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleGeneratorChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange('generator', parseInt(event.currentTarget.value));
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
        <SimpleGrid columns={2} spacing="1em" paddingBottom="1em">
          <InputSelect
            id="generator"
            label="Select Generator"
            tooltip="The base algorithm used by the maze generator. Go to Mazes/Algorithms in the left navigation for more information about a specific generator."
            value={this.props.data.generator}
            onChange={this.handleGeneratorChange}
          >
            <option value="1">Binary Tree</option>
            <option value="2">Sidewinder</option>
            <option value="3">Aldous-Broder</option>
            <option value="4">Wilson's</option>
            <option value="5">Hunt and Kill</option>
            <option value="6">Recursive Backtracker</option>
            <option value="7">Kruskal's</option>
            <option value="8">Prim's</option>
            <option value="9">Growing Tree</option>
            <option value="10">Eller's</option>
            <option value="11">Recursive Subdivision</option>
          </InputSelect>

          <InputText
            id="seed"
            label="Seed"
            tooltip="The seed used by the random number generator."
            placeholder="Seed"
            value={this.props.data.seed}
            onChange={this.handleInputChange}
          />
        </SimpleGrid>
        <SimpleGrid columns={4} spacing="1em" paddingBottom="1em">
          <InputText
            id="width"
            label="Width"
            tooltip="The width of the maze to be generated."
            placeholder="Width"
            value={this.props.data.width}
            onChange={this.handleInputChange}
          />
          <InputText
            id="height"
            label="Height"
            tooltip="The height of the maze to be generated."
            placeholder="Height"
            value={this.props.data.height}
            onChange={this.handleInputChange}
          />
          <InputText
            id="weave"
            label="Weave"
            tooltip="The percentage chance that a cell that fits the criteria for weaving is woven."
            placeholder="Weave"
            value={this.props.data.weave}
            onChange={this.handleInputChange}
            rightAddon="%"
          />
          <InputText
            id="cullDeadEnds"
            label="Cull Dead Ends"
            tooltip="The number of dead ends to be removed after the maze has been generated. At least one cell will always remain at the end of generation."
            placeholder="Cull Dead Ends"
            value={this.props.data.cullDeadEnds}
            onChange={this.handleInputChange}
          />
        </SimpleGrid>
      </>
    );
  }
}
