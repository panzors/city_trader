import { PRODUCTS } from "../data/products";
import SimpleSink from "./inventory/simple-sink";
import Crate from "./inventory/crate";

export default class ConsumerProfile {
  #sinks;
  #warehouse;
  constructor(warehosue) {
    //let start off with a basic consumer profile that does per second ticks
    //10 units of wood per 100000
    this.#sinks = [new SimpleSink(PRODUCTS.wood, 10, 10000)];
    this.#warehouse = warehosue;
  }

  passTime(delta) {
    this.#sinks.forEach((h) => {
      h.passTime(delta);
    });
  }

  get demands() {
    return this.#sinks
      .filter((x) => { return x.currentDemand > 0; })
      .map((x) => {
        return new Crate(x.itemType, x.quantity);
      });
  }

  quenchDemand(crate) {
      const sink = this.#sinks.find(x => { return x.itemType === crate.itemType; });
      sink.quenchDemand(crate.quantity);
  }
}
