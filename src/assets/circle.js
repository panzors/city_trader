import Vector from '../helpers/vector';
import Asset from './asset';

export class Circle extends Asset{
  constructor(options) {
    super(options);
  }

  draw(ctx) {
    if (typeof this.options?.modifier === "function") {
      this.options.modifier(ctx, this);
    }

    this.path = new Path2D();
    this.path.arc(
      this.options.location.x,
      this.options.location.y,
      this.options.radius,
      this.options.startAngle,
      this.options.endAngle,
      false
    );
    ctx.fill(this.path);
  }

  /**
   * 
   * @param {Vector} vector 
   */
  nudgeLocation(vector) {
    if (vector) {
      this.options.location = this.options.location.add(vector);
    }
  }
}
