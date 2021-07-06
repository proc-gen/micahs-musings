import { Cell } from './cell';
import { Generator, GeneratorData } from './generator';

export class HuntAndKillData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class HuntAndKill extends Generator {
  props: HuntAndKillData;

  constructor(baseProps: GeneratorData, props: HuntAndKillData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];
    let currentCell: Cell | undefined;
    let nextCell: Cell | undefined;
    let adjacentCount: number = 0;

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    currentCell = mapCells[this.random.GetInt(mapCells.length)];
    currentCell.visited = true;

    do {
      adjacentCount = (currentCell as Cell).adjacentCells.filter(
        (a) => a !== undefined
      ).length;
      nextCell = (currentCell as Cell).adjacentCells.filter(
        (a) => a !== undefined
      )[this.random.GetInt(adjacentCount)] as Cell;

      if (!nextCell.visited) {
        this.MergeCells(currentCell as Cell, nextCell);
        currentCell = nextCell;
        currentCell.visited = true;
      } else {
        currentCell = undefined;
        let i = this.baseProps.width - 1;
        let j = this.baseProps.height - 1;

        do {
          i = this.baseProps.width - 1;
          do {
            if (
              !this.grid.cells[i][j].visited &&
              this.grid.cells[i][j].adjacentCells.some(
                (a) => a !== undefined && a.visited
              )
            ) {
              currentCell = this.grid.cells[i][j];
            }
            i--;
          } while (currentCell === undefined && i >= 0);
          j--;
        } while (currentCell === undefined && j >= 0);

        this.MergeCells(
          currentCell as Cell,
          (currentCell as Cell).adjacentCells.filter(
            (a) => a !== undefined && a.visited
          )[0]
        );
        (currentCell as Cell).visited = true;
      }
    } while (mapCells.some((a) => !a.visited));
  }
}
