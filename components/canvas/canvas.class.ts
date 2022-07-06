export class CanvasClass {
  public ctx: CanvasRenderingContext2D | null;
  public position: { x: number; y: number };
  public color: string;

  static Width = 30;
  static Height = 60;

  constructor(
    private _ctx: CanvasRenderingContext2D | null,
    private _position: { x: number; y: number },
    _color: string
  ) {
    this.ctx = _ctx;
    this.position = _position;
    this.color = _color;
  }

  public draw() {
    if (!this.ctx) return;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      CanvasClass.Width,
      CanvasClass.Height
    );
  }
}
