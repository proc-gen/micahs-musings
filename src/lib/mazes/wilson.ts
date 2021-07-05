import { Cell } from './cell';
import { Generator } from './generator';

export class WilsonData {
  direction: number; //1 = NE, 2 = SE, 3 = SW, 4 = NW
  chanceVertical: number; //1 - 99

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class Wilson extends Generator {
  props: WilsonData;

  constructor(
    width: number,
    height: number,
    numCellSides: number,
    seed: number,
    weave: number,
    cullDeadEnds: number,
    props: WilsonData
  ) {
    super(width, height, numCellSides, seed, weave, cullDeadEnds);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];
    let currentLoop: Cell[] = []; //functions as stack
    let currentCell: Cell;
    let adjacentCount: number;

    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    mapCells[this.random.GetInt(mapCells.length)].visited = true;
    do {
      currentLoop = [];
      let unvisitedCount = mapCells.filter((a) => !a.visited).length;
      currentCell = mapCells.filter((a) => !a.visited)[
        this.random.GetInt(unvisitedCount)
      ];
      currentLoop.push(currentCell);
      while (!currentCell.visited) {
        adjacentCount = currentCell.adjacentCells.filter(
          (a) => a !== undefined
        ).length;
        currentCell = currentCell.adjacentCells.filter((a) => a !== undefined)[
          this.random.GetInt(adjacentCount)
        ] as Cell;
        let x = currentCell.x,
          y = currentCell.y;
        if (currentLoop.some((a) => a.x === x && a.y === y)) {
          while (
            currentLoop[currentLoop.length - 1].x !== x ||
            currentLoop[currentLoop.length - 1].y !== y
          ) {
            currentLoop.pop();
          }
          currentCell = currentLoop[currentLoop.length - 1];
        } else {
          currentLoop.push(currentCell);
        }
      }

      for (let i: number = 0; i < currentLoop.length - 1; i++) {
        this.MergeCells(currentLoop[i], currentLoop[i + 1]);
        currentLoop[i].visited = true;
      }
      currentLoop[currentLoop.length - 1].visited = true;
    } while (mapCells.some((a) => !a.visited));
  }
}
