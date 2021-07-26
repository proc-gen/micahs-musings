import React from 'react';
import { Wrap, WrapItem, Image } from '@chakra-ui/react';

import { InputText, InputSelect } from '../../../../lib/components';

import {
  GeneratorData,
  CircleMask,
  DiamondMask,
  DonutMask,
  EquilateralTriangleMask,
  FivePointedStarMask,
  FourPointedStarMask,
  HeartMask,
  HexagonMask,
  LightningBoltMask,
  PentagonMask,
  RightTriangleMask,
  SixPointedStarMask,
  SquareWithRoundedEdgesMask,
  Image as MazeImage,
} from '../../../../lib/mazes';

export interface IGeneratorProps {
  data: GeneratorData;
  handleChange: (fieldName: string, value: any) => void;
}

export interface IGeneratorState {}

export class GeneratorProperties extends React.Component<IGeneratorProps, IGeneratorState> {
  constructor(props: IGeneratorProps) {
    super(props);
    this.state = {};

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getMaskImage = this.getMaskImage.bind(this);
  }

  handleSelectChange(event: React.FormEvent<HTMLSelectElement>) {
    this.props.handleChange(event.currentTarget.id, event.currentTarget.value);

    if (event.currentTarget.id === 'maskImageSelection') {
      let maskImage: string = this.getMaskImage(event.currentTarget.value);
      if (maskImage !== '') {
        let img = document.createElement('img');
        img.onload = (e) => {
          let canvas = document.createElement('canvas');
          canvas.height = img.height;
          canvas.width = img.width;

          let context = canvas.getContext('2d');
          if (context !== undefined && context !== null) {
            context.drawImage(img, 0, 0);
            let imgData: ImageData = context.getImageData(0, 0, img.width, img.height);
            let convertedImgData = new MazeImage(img.width, img.height);
            for (let i = 0; i < imgData.data.length; i++) {
              convertedImgData.data[i] = imgData.data[i];
            }
            this.props.handleChange('maskImage', convertedImgData);
          }
        };
        img.src = maskImage;
      } else {
        this.props.handleChange('maskImage', undefined);
      }
    }
  }

  handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    this.props.handleChange(event.currentTarget.id, parseInt(event.currentTarget.value));
  }

  onFileUpload(selectorFiles: FileList | null) {
    if (selectorFiles !== null) {
      alert(selectorFiles[0].name);
    }
  }

  getMaskImage(maskImageSelection: string): string {
    let retVal: string = '';

    switch (maskImageSelection) {
      case 'circle':
        retVal = CircleMask;
        break;
      case 'diamond':
        retVal = DiamondMask;
        break;
      case 'donut':
        retVal = DonutMask;
        break;
      case 'equilateral-triangle':
        retVal = EquilateralTriangleMask;
        break;
      case 'five-pointed-star':
        retVal = FivePointedStarMask;
        break;
      case 'four-pointed-star':
        retVal = FourPointedStarMask;
        break;
      case 'heart':
        retVal = HeartMask;
        break;
      case 'hexagon':
        retVal = HexagonMask;
        break;
      case 'lightning-bolt':
        retVal = LightningBoltMask;
        break;
      case 'pentagon':
        retVal = PentagonMask;
        break;
      case 'right-triangle':
        retVal = RightTriangleMask;
        break;
      case 'six-pointed-star':
        retVal = SixPointedStarMask;
        break;
      case 'square-with-rounded-edges':
        retVal = SquareWithRoundedEdgesMask;
        break;
    }

    return retVal;
  }

  render() {
    return (
      <>
        <Wrap>
          <WrapItem>
            <InputSelect
              id="generator"
              label="Select Generator"
              tooltip="The base algorithm used by the maze generator. Go to Mazes/Algorithms in the left navigation for more information about a specific generator."
              value={this.props.data.generator}
              onChange={this.handleSelectChange}
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
          </WrapItem>
          <WrapItem>
            <InputText
              id="seed"
              label="Seed"
              tooltip="The seed used by the random number generator."
              placeholder="Seed"
              value={this.props.data.seed}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputText
              id="width"
              label="Width"
              tooltip="The width of the maze to be generated."
              placeholder="Width"
              value={this.props.data.width}
              onChange={this.handleInputChange}
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="height"
              label="Height"
              tooltip="The height of the maze to be generated."
              placeholder="Height"
              value={this.props.data.height}
              onChange={this.handleInputChange}
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="weave"
              label="Weave"
              tooltip="The percentage chance that a cell that fits the criteria for weaving is woven."
              placeholder="Weave"
              value={this.props.data.weave}
              onChange={this.handleInputChange}
              rightAddon="%"
            />
          </WrapItem>
          <WrapItem>
            <InputText
              id="cullDeadEnds"
              label="Cull Dead Ends"
              tooltip="The number of dead ends to be removed after the maze has been generated. At least one cell will always remain at the end of generation."
              placeholder="Cull Dead Ends"
              value={this.props.data.cullDeadEnds}
              onChange={this.handleInputChange}
            />
          </WrapItem>
        </Wrap>
        <Wrap>
          <WrapItem>
            <InputSelect
              id="maskImageSelection"
              label="Image Mask"
              tooltip="Select a mask to turn individual cells on/off prior to the algorithm running"
              value={this.props.data.maskImageSelection}
              onChange={this.handleSelectChange}
            >
              <option value="none">None</option>
              <option value="circle">Circle</option>
              <option value="diamond">Diamond</option>
              <option value="donut">Donut</option>
              <option value="equilateral-triangle">Equilateral Triangle</option>
              <option value="five-pointed-star">Five Pointed Star</option>
              <option value="four-pointed-star">Four Pointed Star</option>
              <option value="heart">Heart</option>
              <option value="hexagon">Hexagon</option>
              {/*<option value="lightning-bolt">Lightning Bolt</option>*/}
              <option value="pentagon">Pentagon</option>
              <option value="right-triangle">Right Triangle</option>
              <option value="six-pointed-star">Six Pointed Star</option>
              <option value="square-with-rounded-edges">Square with Rounded Edges</option>
            </InputSelect>
          </WrapItem>
          <WrapItem>
            <Image src={this.getMaskImage(this.props.data.maskImageSelection)} maxWidth="100px" maxHeight="100px" />
          </WrapItem>
        </Wrap>
      </>
    );
  }
}
