import { Generator } from './generator';
import { Cell } from './cell';

export class SidewinderData {
  sideDirection: number;
  windDirection: number;
  chanceWind: number; //1 - 99

  constructor() {
    this.sideDirection = 1;
    this.windDirection = 0;
    this.chanceWind = 50;
  }
}

export class Sidewinder extends Generator {
  props: SidewinderData;

  constructor(
    width: number,
    height: number,
    numCellSides: number,
    seed: number,
    weave: number,
    cullDeadEnds: number,
    props: SidewinderData
  ) {
    super(width, height, numCellSides, seed, weave, cullDeadEnds);
    this.props = props;
  }

  Generate(): void {
    let cellRun: Cell[] = [];
    let randResult: number = 0;

    let iStart = 0,
      iMax = this.width,
      iStep = 1;
    let jStart = 0,
      jMax = this.height,
      jStep = 1;

    switch (this.props.sideDirection) {
      case 0:
        jStart = 0;
        jMax = this.height;
        jStep = 1;
        break;
      case 1:
        iStart = 0;
        iMax = this.width;
        iStep = 1;
        break;
      case 2:
        jStart = this.height - 1;
        jMax = 0;
        jStep = -1;
        break;
      case 3:
        iStart = this.width - 1;
        iMax = 0;
        iStep = -1;
        break;
    }

    switch (this.props.windDirection) {
      case 0:
        jStart = 0;
        jMax = this.height;
        jStep = 1;
        break;
      case 1:
        iStart = 0;
        iMax = this.width;
        iStep = 1;
        break;
      case 2:
        jStart = this.height - 1;
        jMax = 0;
        jStep = -1;
        break;
      case 3:
        iStart = this.width - 1;
        iMax = 0;
        iStep = -1;
        break;
    }

    //E and W
    if (this.props.sideDirection === 1 || this.props.sideDirection === 3) {
      for (
        let j: number = jStart;
        jStart === 0 ? j < jMax : j >= jMax;
        j += jStep
      ) {
        for (
          let i: number = iStart;
          iStart === 0 ? i < iMax : i >= iMax;
          i += iStep
        ) {
          if (this.numCellSides === 4) {
            cellRun.push(this.grid.cells[i][j]);
            randResult = this.random.GetInt(100);

            if (
              this.grid.cells[i][j].adjacentCells[this.props.sideDirection] ===
                undefined ||
              (this.grid.cells[i][j].adjacentCells[this.props.windDirection] !==
                undefined &&
                randResult < this.props.chanceWind)
            ) {
              randResult = this.random.GetInt(cellRun.length);
              if (
                cellRun[randResult].adjacentCells[this.props.windDirection] !==
                undefined
              ) {
                this.MergeCells(
                  cellRun[randResult],
                  cellRun[randResult].adjacentCells[this.props.windDirection]
                );
              }
              cellRun = [];
            } else {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[this.props.sideDirection]
              );
            }
          }
        }
      }
      cellRun = [];
    }

    //N and S
    else {
      for (
        let i: number = iStart;
        iStart === 0 ? i < iMax : i >= iMax;
        i += iStep
      ) {
        for (
          let j: number = jStart;
          jStart === 0 ? j < jMax : j >= jMax;
          j += jStep
        ) {
          if (this.numCellSides === 4) {
            cellRun.push(this.grid.cells[i][j]);
            randResult = this.random.GetInt(100);

            if (
              this.grid.cells[i][j].adjacentCells[this.props.sideDirection] ===
                undefined ||
              (this.grid.cells[i][j].adjacentCells[this.props.windDirection] !==
                undefined &&
                randResult < this.props.chanceWind)
            ) {
              randResult = this.random.GetInt(cellRun.length);
              if (
                cellRun[randResult].adjacentCells[this.props.windDirection] !==
                undefined
              ) {
                this.MergeCells(
                  cellRun[randResult],
                  cellRun[randResult].adjacentCells[this.props.windDirection]
                );
              }
              cellRun = [];
            } else {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[this.props.sideDirection]
              );
            }
          }
        }
      }
      cellRun = [];
    }
  }
}
