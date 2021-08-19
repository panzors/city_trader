const OFFLOADTIME = 3000;


export default class OffloadAction {
  constructor(caravan, targetCity, item, quantity) {
    this.caravan = caravan; //not sure what this does yet
    this.item = item;
    this.quantity = quantity;

    this.targetCity = targetCity;
    this.currentLocation = targetCity.location;
    this.elapsedTime = 0;
  }

  #canExecute() {
    return this.targetCity.warehouse.canReceive(this.item, this.quantity);
  }

  execute(deltaTime) {
    if (!this.#canExecute()){
        return false;
    }

    this.elapsedTime += deltaTime;
    if (this.elapsedTime >= OFFLOADTIME) {
      this.targetCity.warehouse.receive(this.item, this.quantity);
      return true;
    }

    return false;
  }

  draw(ctx) {
    //TODO: make it blink when it's offloading
    ctx.fillStyle = "green";
    ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);
  }
}
