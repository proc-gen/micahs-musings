import { Generator } from './generator';

export class BinaryTree extends Generator {
  Generate(): void {
    let randResult: number = 0;
    for (let i: number = 0; i < this.width; i++) {
      for (let j: number = 0; j < this.height; j++) {
        if (this.numCellSides === 4) {
          if (
            this.grid.cells[i][j]?.adjacentCells[0] !== undefined &&
            this.grid.cells[i][j]?.adjacentCells[1] !== undefined
          ) {
            randResult = this.random.GetInt(2);
            if (randResult === 0) {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[0]
              );
            } else {
              this.MergeCells(
                this.grid.cells[i][j],
                this.grid.cells[i][j].adjacentCells[1]
              );
            }
          } else if (this.grid.cells[i][j]?.adjacentCells[0] !== undefined) {
            this.MergeCells(
              this.grid.cells[i][j],
              this.grid.cells[i][j].adjacentCells[0]
            );
          } else if (this.grid.cells[i][j]?.adjacentCells[1] !== undefined) {
            this.MergeCells(
              this.grid.cells[i][j],
              this.grid.cells[i][j].adjacentCells[1]
            );
          }
        }
      }
    }
  }
}
