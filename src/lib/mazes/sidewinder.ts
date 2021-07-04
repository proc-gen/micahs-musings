import { Generator } from './generator';
import { Cell } from './cell';

export class SidewinderData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
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
    let randResult: number = 0;
    let cellRun: Cell[] = [];
    const verticalCell: number =
      this.props.direction === 1 || this.props.direction === 4 ? 0 : 2;
    const horizontalCell: number =
      this.props.direction === 1 || this.props.direction === 2 ? 1 : 3;

    let iStart = 0,
      iMax = this.width,
      iStep = 1;
    let jStart = 0,
      jMax = this.height,
      jStep = 1;

    if (verticalCell === 2) {
      jStart = this.height - 1;
      jMax = 0;
      jStep = -1;
    }

    if (horizontalCell === 3) {
      iStart = this.width - 1;
      iMax = 0;
      iStep = -1;
    }

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
            this.grid.cells[i][j].adjacentCells[horizontalCell] === undefined ||
            (this.grid.cells[i][j].adjacentCells[verticalCell] !== undefined &&
              randResult < this.props.chanceVertical)
          ) {
            randResult = this.random.GetInt(cellRun.length);
            if (cellRun[randResult].adjacentCells[verticalCell] !== undefined) {
              this.MergeCells(
                cellRun[randResult],
                cellRun[randResult].adjacentCells[verticalCell]
              );
            }
            cellRun = [];
          } else {
            this.MergeCells(
              this.grid.cells[i][j],
              this.grid.cells[i][j].adjacentCells[horizontalCell]
            );
          }
        }
      }
      cellRun = [];
    }
  }
}
