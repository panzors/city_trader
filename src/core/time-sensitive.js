export default class TimeSensitive {
  #elapsedTime = 0;
  #timeTillNextCall = 0;

  constructor(timeTillNextCall) {
    this.#timeTillNextCall = timeTillNextCall;
  }

  shouldPassTime() {
    // by default, everything should just be able to pass time, but there are
    // speecial occasions when this needs to wait
    return true;
  }

  passTime(deltaTime) {
    if (this.shouldPassTime()) {
      this.#elapsedTime += deltaTime;
      if (this.#elapsedTime >= this.#timeTillNextCall) {
        this.#elapsedTime -= this.#timeTillNextCall;
        this.execute();
      }
    }
  }

  execute() {
    console.log("why have you done this to me? please extend me");
    console.log(this);
  }
}
