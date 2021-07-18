import { Cell } from '../maze-parts/cell';
import { Generator, GeneratorData } from './generator';

export class GrowingTreeData {
  [key: string]: any;
  setStartPosition: boolean;
  startPosX: number;
  startPosY: number;
  treeGrammar: string;

  constructor() {
    this.setStartPosition = false;
    this.startPosX = 0;
    this.startPosY = 0;
    this.treeGrammar = 'R';
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
    let grammarPosition: number = 0;

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    if (
      this.props.setStartPosition &&
      mapCells.some(
        (a) => a.x === this.props.startPosX && a.y === this.props.startPosY
      )
    ) {
      currentCell = mapCells.filter(
        (a) => a.x === this.props.startPosX && a.y === this.props.startPosY
      )[0];
    } else {
      currentCell = mapCells[this.random.GetInt(mapCells.length)];
    }

    currentCell.visited = true;
    usedCells.push(currentCell);
    do {
      do {
        pickCount = usedCells.filter((a) =>
          a.adjacentCells.some((b) => b !== undefined && !b.visited)
        ).length;

        //First
        if (this.props.treeGrammar[grammarPosition] === 'F') {
          currentCell = usedCells.filter((a) =>
            a.adjacentCells.some((b) => b !== undefined && !b.visited)
          )[0];
        }
        //Last
        else if (this.props.treeGrammar[grammarPosition] === 'L') {
          currentCell = usedCells.filter((a) =>
            a.adjacentCells.some((b) => b !== undefined && !b.visited)
          )[pickCount - 1];
        } //Fallthrough for case R (Random)
        else {
          currentCell = usedCells.filter((a) =>
            a.adjacentCells.some((b) => b !== undefined && !b.visited)
          )[this.random.GetInt(pickCount)];
        }
      } while (
        !currentCell.adjacentCells.some((a) => a !== undefined && !a.visited)
      );
      grammarPosition = (grammarPosition + 1) % this.props.treeGrammar.length;
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
