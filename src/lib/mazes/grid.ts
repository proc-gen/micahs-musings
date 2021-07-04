import { Cell } from './cell';

import { Image } from './image';
import { Black, RGBA, White } from './rgba';

export class Grid {
  width: number;
  height: number;
  numCellSides: number;
  cells: Cell[][];

  constructor(width: number, height: number, numCellSides: number) {
    this.width = width;
    this.height = height;
    this.numCellSides = numCellSides;
    this.cells = [];

    for (let i: number = 0; i < width; i++) {
      this.cells[i] = [];
      for (let j: number = 0; j < height; j++) {
        this.cells[i][j] = new Cell(i, j, numCellSides);
      }
    }
  }

  InitializeGrid(): void {
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (!this.cells[i][j].masked) {
          if (this.numCellSides === 4) {
            //North
            if (j < this.height - 1) {
              this.cells[i][j].adjacentCells.push(
                !this.cells[i][j + 1].masked ? this.cells[i][j + 1] : undefined
              );
            } else {
              this.cells[i][j].adjacentCells.push(undefined);
            }
            //East
            if (i < this.width - 1) {
              this.cells[i][j].adjacentCells.push(
                !this.cells[i + 1][j].masked ? this.cells[i + 1][j] : undefined
              );
            } else {
              this.cells[i][j].adjacentCells.push(undefined);
            }
            //South
            if (j > 0) {
              this.cells[i][j].adjacentCells.push(
                !this.cells[i][j - 1].masked ? this.cells[i][j - 1] : undefined
              );
            } else {
              this.cells[i][j].adjacentCells.push(undefined);
            }
            //West
            if (i > 0) {
              this.cells[i][j].adjacentCells.push(
                !this.cells[i - 1][j].masked ? this.cells[i - 1][j] : undefined
              );
            } else {
              this.cells[i][j].adjacentCells.push(undefined);
            }
          }

          for (let w: number = 0; w < this.numCellSides; w++) {
            this.cells[i][j].SetWall(w, true);
          }
        }
      }
    }
  }

  Display(dimension: number): Image {
    const size: number = Math.max(this.width, this.height);
    const wallColor: RGBA = Black;
    const floorColor: RGBA = White;

    let imgData = new Image(size * dimension, size * dimension);
    for (let i: number = 0; i < size * dimension; i++) {
      for (let j: number = 0; j < size * dimension; j++) {
        imgData.SetPixel(i, j, floorColor);
      }
    }

    let iOffset: number = 0,
      jOffset: number = 0;
    if (this.width < this.height) {
      iOffset = Math.floor((this.height - this.width) / 2);
    } else if (this.width > this.height) {
      jOffset = Math.floor((this.width - this.height) / 2);
    }

    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        let cellImgData = this.cells[i][j].Display(
          dimension,
          wallColor,
          floorColor
        );
        imgData.SetPixels(
          (i + iOffset) * dimension,
          (j + jOffset) * dimension,
          cellImgData
        );
      }
    }

    imgData.FlipOverX();

    return imgData;
  }
}
