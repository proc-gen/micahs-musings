import { Cell } from '../maze-parts/cell';
import { Generator, GeneratorData } from './generator';

export class GrowingTreeData {
  direction: number;
  chanceVertical: number;

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class GrowingTree extends Generator {
  props: GrowingTreeData;

  constructor(baseProps: GeneratorData, props: GrowingTreeData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];
    let usedCells: Cell[] = [];
    let currentCell: Cell;
    let nextCell: Cell | undefined;
    let pickCount: number;
    let adjacentCount: number;

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    currentCell = mapCells[this.random.GetInt(mapCells.length)];
    currentCell.visited = true;
    usedCells.push(currentCell);
    do {
      do {
        pickCount = usedCells.filter((a) =>
          a.adjacentCells.some((b) => b !== undefined && !b.visited)
        ).length;
        currentCell = usedCells.filter((a) =>
          a.adjacentCells.some((b) => b !== undefined && !b.visited)
        )[this.random.GetInt(pickCount)];
      } while (
        !currentCell.adjacentCells.some((a) => a !== undefined && !a.visited)
      );

      adjacentCount = currentCell.adjacentCells.filter(
        (a) => a !== undefined && !a.visited
      ).length;
      nextCell = currentCell.adjacentCells.filter(
        (a) => a !== undefined && !a.visited
      )[this.random.GetInt(adjacentCount)];
      (nextCell as Cell).visited = true;
      this.MergeCells(currentCell, nextCell);
      usedCells.push(nextCell as Cell);
    } while (mapCells.some((a) => !a.visited));
  }
}
