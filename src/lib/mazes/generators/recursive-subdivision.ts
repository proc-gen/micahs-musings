import { Cell } from '../maze-parts/cell';
import { Generator, GeneratorData } from './generator';
import { MathUtils } from '../utils/math';

export class RecursiveSubdivisionData {
  direction: number;
  chanceVertical: number;

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class RecursiveSubdivision extends Generator {
  props: RecursiveSubdivisionData;

  constructor(baseProps: GeneratorData, props: RecursiveSubdivisionData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];

    let startX: number, startY: number, startWidth: number, startHeight: number;

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
          for (let k: number = 0; k < this.grid.numCellSides; k++) {
            if (this.grid.cells[i][j].adjacentCells[k] !== undefined) {
              this.grid.cells[i][j].SetWall(k, false);
            }
          }
        }
      }
    }

    startX = MathUtils.MinX(mapCells);
    startY = MathUtils.MinY(mapCells);
    startWidth = MathUtils.MaxX(mapCells) - startX + 1;
    startHeight = MathUtils.MaxY(mapCells) - startY + 1;

    //alert(startX + ', ' + startY + ', ' + startWidth + ', ' + startHeight);
    this.divide(mapCells, startX, startY, startHeight, startWidth);
  }

  private divide(
    mapCells: Cell[],
    row: number,
    column: number,
    height: number,
    width: number
  ): void {
    if (height > 1 || width > 1) {
      if (height > width) {
        this.divideHorizontal(mapCells, row, column, height, width);
      } else {
        this.divideVertical(mapCells, row, column, height, width);
      }
    }
  }

  private divideHorizontal(
    mapCells: Cell[],
    row: number,
    column: number,
    height: number,
    width: number
  ): void {
    let divideSouthOf: number = this.random.GetInt(height - 1);
    //alert('south: ' + divideSouthOf);
    let affectedCells: Cell[] = mapCells
      .filter(
        (a) =>
          a.y === row + divideSouthOf && a.x >= column && a.x < column + width
      )
      .sort((a, b) => this.compareElement(a, b, 'x'));
    if (
      affectedCells.length > 0 &&
      affectedCells.some((a) => a.adjacentCells[0] !== undefined)
    ) {
      affectedCells.forEach((a) => {
        if (a.adjacentCells[0] !== undefined) {
          a.SetWall(0, true);
          a.adjacentCells[0].SetWall(2, true);
        }
      });

      if (row + divideSouthOf < MathUtils.MaxY(mapCells)) {
        let passageCell: number = -1;
        let affectedCellSection: Cell[] = [];
        for (let i: number = 0; i < affectedCells.length; i++) {
          if (
            affectedCellSection.length === 0 ||
            MathUtils.MaxX(affectedCellSection) - affectedCells[i].x === -1
          ) {
            affectedCellSection.push(affectedCells[i]);
          } else {
            if (
              affectedCellSection.some((a) => a.adjacentCells[0] !== undefined)
            ) {
              do {
                passageCell = this.random.GetInt(affectedCellSection.length);
              } while (
                affectedCellSection[passageCell].adjacentCells[0] === undefined
              );
              this.MergeCells(
                affectedCellSection[passageCell],
                affectedCellSection[passageCell].adjacentCells[0]
              );
              affectedCellSection = [];
            }
          }
        }

        if (affectedCellSection.some((a) => a.adjacentCells[0] !== undefined)) {
          do {
            passageCell = this.random.GetInt(affectedCellSection.length);
          } while (
            affectedCellSection[passageCell].adjacentCells[0] === undefined
          );
          this.MergeCells(
            affectedCellSection[passageCell],
            affectedCellSection[passageCell].adjacentCells[0]
          );
        }
      }

      this.divide(mapCells, row, column, divideSouthOf + 1, width);
      this.divide(
        mapCells,
        row + divideSouthOf + 1,
        column,
        height - divideSouthOf - 1,
        width
      );
    }
  }

  private divideVertical(
    mapCells: Cell[],
    row: number,
    column: number,
    height: number,
    width: number
  ): void {
    let divideEastOf: number = this.random.GetInt(width - 1);
    //alert('east: ' + divideEastOf);
    let affectedCells: Cell[] = mapCells
      .filter(
        (a) => a.x === column + divideEastOf && a.y >= row && a.y < row + height
      )
      .sort((a, b) => this.compareElement(a, b, 'y'));
    if (
      affectedCells.length > 0 &&
      affectedCells.some((a) => a.adjacentCells[1] !== undefined)
    ) {
      affectedCells.forEach((a) => {
        if (a.adjacentCells[1] !== undefined) {
          a.SetWall(1, true);
          a.adjacentCells[1].SetWall(3, true);
        }
      });

      if (column + divideEastOf < MathUtils.MaxX(mapCells)) {
        let passageCell: number = -1;
        let affectedCellSection: Cell[] = [];
        for (let i: number = 0; i < affectedCells.length; i++) {
          if (
            affectedCellSection.length === 0 ||
            MathUtils.MaxY(affectedCellSection) - affectedCells[i].y === -1
          ) {
            affectedCellSection.push(affectedCells[i]);
          } else {
            if (
              affectedCellSection.some((a) => a.adjacentCells[1] !== undefined)
            ) {
              do {
                passageCell = this.random.GetInt(affectedCellSection.length);
              } while (
                affectedCellSection[passageCell].adjacentCells[1] === undefined
              );
              this.MergeCells(
                affectedCellSection[passageCell],
                affectedCellSection[passageCell].adjacentCells[1]
              );
              affectedCellSection = [];
            }
          }
        }

        if (affectedCellSection.some((a) => a.adjacentCells[1] !== undefined)) {
          do {
            passageCell = this.random.GetInt(affectedCellSection.length);
          } while (
            affectedCellSection[passageCell].adjacentCells[1] === undefined
          );
          this.MergeCells(
            affectedCellSection[passageCell],
            affectedCellSection[passageCell].adjacentCells[1]
          );
        }
      }

      this.divide(mapCells, row, column, height, divideEastOf + 1);
      this.divide(
        mapCells,
        row,
        column + divideEastOf + 1,
        height,
        width - divideEastOf - 1
      );
    }
  }

  private compareElement<Type, Key extends keyof Type>(
    a: Type,
    b: Type,
    key: Key
  ): number {
    return a[key] === b[key] ? 0 : a[key] < b[key] ? -1 : 1;
  }
}
