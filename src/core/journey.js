import Asset from "../assets/asset";

export default class Journey extends Asset {
  #actions = null;
  constructor(actions, homeCity, destinationCity, completedCallback) {
    super({});

    this.homeCity = homeCity;
    this.destinationCity = destinationCity;

    this.#actions = actions;
    this.completedCallback = completedCallback;
  }

  passTime(deltaTime) {
    if (this.#actions.length === 0){
      return;
    }

    const completed = this.#actions[0]?.execute(deltaTime);

    if (completed) {
      this.#actions.shift();
    }

    if (this.#actions.length === 0) {
      this.completedCallback(this);
    }
  }

  draw(ctx) {
    //maybe also draw the vector from start to finish
    //do the scale thing later
    this.#actions[0]?.draw(ctx);
  }
}
