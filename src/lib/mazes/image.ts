import { RGBA } from './rgba';

export class Image extends ImageData {
  GetPixel(x: number, y: number): RGBA {
    return new RGBA(
      this.data[this.width * x * 4 + y * 4],
      this.data[this.width * x * 4 + y * 4 + 1],
      this.data[this.width * x * 4 + y * 4 + 2],
      this.data[this.width * x * 4 + y * 4 + 3]
    );
  }

  SetPixel(x: number, y: number, c: RGBA) {
    this.data[this.width * x * 4 + y * 4] = c.r;
    this.data[this.width * x * 4 + y * 4 + 1] = c.g;
    this.data[this.width * x * 4 + y * 4 + 2] = c.b;
    this.data[this.width * x * 4 + y * 4 + 3] = c.a;
  }

  SetPixels(x: number, y: number, imgData: Image) {
    for (let i: number = 0; i < imgData.width; i++) {
      for (let j: number = 0; j < imgData.height; j++) {
        this.SetPixel(i + x, j + y, imgData.GetPixel(i, j));
      }
    }
  }
}
