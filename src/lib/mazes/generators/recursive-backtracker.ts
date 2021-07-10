import { Cell } from '../';
import { Generator, GeneratorData } from './generator';

export class RecursiveBacktrackerData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class RecursiveBacktracker extends Generator {
  props: RecursiveBacktrackerData;

  constructor(baseProps: GeneratorData, props: RecursiveBacktrackerData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];
    let currentSet: Cell[] = [];
    let currentCell: Cell;
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
    currentSet.push(currentCell);

    do {
      adjacentCount = (currentCell as Cell).adjacentCells.filter(
        (a) => a !== undefined && !a.visited
      ).length;

      if (adjacentCount === 0) {
        currentSet.pop();
        currentCell = currentSet[currentSet.length - 1];
      } else {
        nextCell = (currentCell as Cell).adjacentCells.filter(
          (a) => a !== undefined && !a.visited
        )[this.random.GetInt(adjacentCount)] as Cell;
        this.MergeCells(currentCell, nextCell);
        currentCell = nextCell;
        currentCell.visited = true;
        currentSet.push(currentCell);
      }
    } while (currentSet.length > 0);
  }
}
