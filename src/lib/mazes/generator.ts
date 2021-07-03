import { Cell } from './cell';
import { Grid } from './grid';
import { Image } from './image';
import { Random } from './random';

export class Generator {
  height: number;
  width: number;
  numCellSides: number;
  seed: number;
  grid!: Grid;
  weave: number;
  cullDeadEnds: number;
  random!: Random;

  constructor(
    width: number,
    height: number,
    numCellSides: number,
    seed: number,
    weave: number,
    cullDeadEnds: number
  ) {
    this.width = width;
    this.height = height;
    this.numCellSides = numCellSides;
    this.seed = seed;
    this.weave = weave;
    this.cullDeadEnds = cullDeadEnds;
  }

  RunGenerator(): void {
    this.random = new Random(this.seed);
    this.grid = new Grid(this.width, this.height, this.numCellSides);
    this.grid.InitializeGrid();

    this.Generate();
    this.Weave();
    this.RemoveDeadEnds();
  }

  protected Generate(): void {}

  protected Weave(): void {}

  protected RemoveDeadEnds(): void {}

  protected MergeCells(currentCell: Cell, nextCell: Cell | undefined): void {
    if (this.numCellSides === 4) {
      if (
        currentCell.adjacentCells[0] !== undefined &&
        currentCell.adjacentCells[0]?.x === nextCell?.x &&
        currentCell.adjacentCells[0]?.y === nextCell?.y
      ) {
        currentCell.SetWall(0, false);
        nextCell.SetWall(2, false);
      } else if (
        currentCell.adjacentCells[1] !== undefined &&
        currentCell.adjacentCells[1]?.x === nextCell?.x &&
        currentCell.adjacentCells[1]?.y === nextCell?.y
      ) {
        currentCell.SetWall(1, false);
        nextCell.SetWall(3, false);
      } else if (
        currentCell.adjacentCells[2] !== undefined &&
        currentCell.adjacentCells[2]?.x === nextCell?.x &&
        currentCell.adjacentCells[2]?.y === nextCell?.y
      ) {
        currentCell.SetWall(2, false);
        nextCell.SetWall(0, false);
      } else if (
        currentCell.adjacentCells[3] !== undefined &&
        currentCell.adjacentCells[3]?.x === nextCell?.x &&
        currentCell.adjacentCells[3]?.y === nextCell?.y
      ) {
        currentCell.SetWall(3, false);
        nextCell.SetWall(1, false);
      }
    }
  }

  Display(dimension: number): Image {
    return this.grid.Display(dimension);
  }
}
