import { Cell } from '../maze-parts/cell';
import { Generator, GeneratorData } from './generator';
import { MathUtils } from '../utils/math';

export class EllerData {
  direction: number;
  chanceVertical: number;

  constructor() {
    this.direction = 1;
    this.chanceVertical = 50;
  }
}

export class Eller extends Generator {
  props: EllerData;

  constructor(baseProps: GeneratorData, props: EllerData) {
    super(baseProps);
    this.props = props;
  }

  Generate(): void {
    let mapCells: Cell[] = [];
    let currentRow: Cell[] = [];
    let currentRowSet: Cell[] = [];
    let row: number;
    let finalRow: number;
    let currentSet: number = 1;
    let currentRowSets: number[] = [];

    for (let i: number = 0; i < this.baseProps.width; i++) {
      for (let j: number = 0; j < this.baseProps.height; j++) {
        if (!this.grid.cells[i][j].masked) {
          mapCells.push(this.grid.cells[i][j]);
        }
      }
    }

    row = MathUtils.MaxY(mapCells);
    finalRow = MathUtils.MinY(mapCells);

    do {
      currentRow = mapCells.filter((a) => a.y === row);
      currentRow.forEach((a) => {
        if (a.set === 0) {
          a.set = currentSet;
          currentSet++;
        }
      });

      for (let i: number = 0; i < currentRow.length; i++) {
        if (
          currentRow[i].adjacentCells[3] !== undefined &&
          (currentRow[i].adjacentCells[3] as Cell).set !== currentRow[i].set
        ) {
          if (this.random.GetInt(2) === 0) {
            this.MergeCells(currentRow[i], currentRow[i].adjacentCells[3]);
            currentRowSet = mapCells.filter(
              (a) => a.set === (currentRow[i].adjacentCells[3] as Cell).set
            );
            for (let j: number = 0; j < currentRowSet.length; j++) {
              currentRowSet[j].set = currentRow[i].set;
            }
          }
        }
      }

      currentRowSets = [];
      for (let i: number = 0; i < currentRow.length; i++) {
        if (currentRowSets.indexOf(currentRow[i].set) === -1) {
          currentRowSets.push(currentRow[i].set);
        }
      }

      for (let i: number = 0; i < currentRowSets.length; i++) {
        currentRowSet = currentRow.filter((a) => a.set === currentRowSets[i]);
        let rowMovedSouth: boolean = false;
        for (let j: number = 0; j < currentRowSet.length; j++) {
          if (
            currentRowSet[j].adjacentCells[2] !== undefined &&
            (currentRowSet[j].adjacentCells[2] as Cell).set !==
              currentRowSet[j].set
          ) {
            if (this.random.GetInt(3) === 0) {
              rowMovedSouth = true;
              this.MergeCells(
                currentRowSet[j],
                currentRowSet[j].adjacentCells[2]
              );
              (currentRowSet[j].adjacentCells[2] as Cell).set =
                currentRowSet[j].set;
            }
          }
        }
        if (!rowMovedSouth) {
          for (let j: number = 0; j < currentRowSet.length; j++) {
            if (
              !rowMovedSouth &&
              currentRowSet[j].adjacentCells[2] !== undefined &&
              (currentRowSet[j].adjacentCells[2] as Cell).set !==
                currentRowSet[j].set
            ) {
              rowMovedSouth = true;
              this.MergeCells(
                currentRowSet[j],
                currentRowSet[j].adjacentCells[2]
              );
              (currentRowSet[j].adjacentCells[2] as Cell).set =
                currentRowSet[j].set;
            }
          }
        }
      }

      row--;
    } while (row >= finalRow);

    for (let i: number = 0; i < currentRow.length; i++) {
      if (
        currentRow[i].adjacentCells[3] !== undefined &&
        (currentRow[i].adjacentCells[3] as Cell).set !== currentRow[i].set
      ) {
        this.MergeCells(currentRow[i], currentRow[i].adjacentCells[3]);
        currentRowSet = mapCells.filter(
          (a) => a.set === (currentRow[i].adjacentCells[3] as Cell).set
        );
        for (let j: number = 0; j < currentRowSet.length; j++) {
          currentRowSet[j].set = currentRow[i].set;
        }
      }
    }
  }
}
