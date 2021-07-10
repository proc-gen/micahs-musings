import { Cell } from '../maze-parts/cell';
import { Grid } from '../maze-parts/grid';
import { Image } from '../image-utils/image';
import { Random } from '../utils/random';

export class GeneratorData {
  height: number;
  width: number;
  numCellSides: number;
  seed: number;
  grid!: Grid;
  weave: number;
  cullDeadEnds: number;
  generator: number;

  constructor() {
    this.generator = 1;
    this.width = 10;
    this.height = 10;
    this.numCellSides = 4;
    this.seed = 1337;
    this.weave = 0;
    this.cullDeadEnds = 0;
  }
}

export class Generator {
  baseProps: GeneratorData;
  grid!: Grid;
  random!: Random;

  constructor(baseProps: GeneratorData) {
    this.baseProps = baseProps;
  }

  RunGenerator(): void {
    this.random = new Random(this.baseProps.seed);
    this.grid = new Grid(
      this.baseProps.width,
      this.baseProps.height,
      this.baseProps.numCellSides
    );
    this.grid.InitializeGrid();

    this.Generate();
    this.Weave();
    this.RemoveDeadEnds();
  }

  protected Generate(): void {}

  protected Weave(): void {}

  protected RemoveDeadEnds(): void {}

  protected MergeCells(currentCell: Cell, nextCell: Cell | undefined): void {
    if (this.baseProps.numCellSides === 4) {
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
