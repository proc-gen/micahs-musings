import { Cell } from './cell';
import { Generator, GeneratorData } from './generator';

export class AldousBroderData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class AldousBroder extends Generator {
  props: AldousBroderData;

  constructor(baseProps: GeneratorData, props: AldousBroderData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let adjacentCount: number = 0;
    let mapCells: Cell[] = [];
    let currentCell: Cell;
    let nextCell: Cell | undefined;

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    currentCell = mapCells[this.random.GetInt(mapCells.length)];
    do {
      currentCell.visited = true;
      adjacentCount = currentCell.adjacentCells.filter(
        (a) => a !== undefined
      ).length;
      nextCell = currentCell.adjacentCells.filter((a) => a !== undefined)[
        this.random.GetInt(adjacentCount)
      ];
      if (!nextCell?.visited) {
        this.MergeCells(currentCell, nextCell);
      }
      currentCell = nextCell as Cell;
      nextCell = undefined;
    } while (mapCells.some((a) => !a.visited));
  }
}
