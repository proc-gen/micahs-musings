import { Generator } from './generator';

export class BinaryTreeData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class BinaryTree extends Generator {
  props: BinaryTreeData;

  constructor(
    width: number,
    height: number,
    numCellSides: number,
    seed: number,
    weave: number,
    cullDeadEnds: number,
    props: BinaryTreeData
  ) {
    super(width, height, numCellSides, seed, weave, cullDeadEnds);
    this.props = props;
  }

  Generate(): void {
    let randResult: number = 0;
    const verticalCell: number =
      this.props.direction === 1 || this.props.direction === 4 ? 0 : 2;
    const horizontalCell: number =
      this.props.direction === 1 || this.props.direction === 2 ? 1 : 3;

    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (this.numCellSides === 4) {
          if (
            this.grid.cells[i][j]?.adjacentCells[verticalCell] !== undefined &&
            this.grid.cells[i][j]?.adjacentCells[horizontalCell] !== undefined
          ) {
            randResult = this.random.GetInt(100);
            if (randResult < this.props.chanceVertical) {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[verticalCell]
              );
            } else {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[horizontalCell]
              );
            }
          } else if (
            this.grid.cells[i][j]?.adjacentCells[verticalCell] !== undefined
          ) {
            this.MergeCells(
              this.grid.cells[i][j],
              this.grid.cells[i][j].adjacentCells[verticalCell]
            );
          } else if (
            this.grid.cells[i][j]?.adjacentCells[horizontalCell] !== undefined
          ) {
            this.MergeCells(
              this.grid.cells[i][j],
              this.grid.cells[i][j].adjacentCells[horizontalCell]
            );
          }
        }
      }
    }
  }
}
