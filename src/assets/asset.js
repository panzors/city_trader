
import { v4 as uuidv4 } from 'uuid';

export default class Asset {
  constructor(options) {
    this.id = uuidv4();
    this.options = options || {};
    this.isMouseOver = false;
    this.dragging = false;
    this.path = null;
  }

  get zIndex() {
    return this.options?.zIndex | 0;
  }
  
  draw(ctx) {
    //PLEASE IMPLEMENT ME
  }

  passTime(deltaTime) {
    if (typeof this.options?.passTime === "function") {
      this.options.passTime(deltaTime);
    }
  }

  setMouseOver(state) {
    this.isMouseOver = state;
  }

  setDragging(state) {
    this.dragging = state;
  }

  isMouseInside(ctx, event) {
    if (this.path) {
      return ctx.isPointInPath(this.path, event.offsetX, event.offsetY);
    }
    return false;
  }

  outputDebug(){
    console.log(this);
  }
}
