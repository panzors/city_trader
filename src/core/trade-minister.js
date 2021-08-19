import Caravan from "./caravan";
import BuyAction from "./trade/buy-action";
import OffloadAction from "./trade/offload-action";
import TravelAction from "./trade/travel-action";
import City from "./city";
import TimeSensitive from "./time-sensitive";

export default class TradeMinister extends TimeSensitive {
  #fetchingProducts = [];

  /**
   * 
   * @param {City} city 
   */
  constructor(city) {
      super(0);
    this.city = city;
  }

  execute() {
    const hungryFor = this.city.consumptionProfile.demands;
    if (hungryFor?.length) {
      //cross reference with dispatched caravans
      hungryFor.forEach((hunger) => {
        // console.log(hunger);
        if (!this.#dispatched(hunger.product)) {
          //TODO: fetch a caravan from the city instead
          const caravan = new Caravan();
          //base it on how big the caravan is
          const quantity = Math.min(hunger.quantity, caravan.maxCaravanLoad); 
          caravan.homeCity = this.city.name;
          this.#fetchingProducts.push(hunger.product);
          caravan.destination = getClosetProducer(hunger.product);
          this.city.addToTradeFleet(caravan);
          caravan.journeyLegs = createSimpleTradeMission(
            caravan,
            caravan.route,
            hunger.product,
            quantity
          );
          caravan.startJourney((c, s) => this.onJourneyCompleted(c, s, hunger.product));
        }
      });
    }
  }

  #dispatched(product) {
    const found = this.#fetchingProducts.find((x) => x === product);
    return !!found;
  }

  onJourneyCompleted(caravan, state, product) {
    if (state) {

    } else {
      throw Error("i'm not cool enough to handle failed journeys");
    }

    //close the ticket from the trade minister sider
    const index = this.#fetchingProducts.findIndex(x => x === product);
    this.#fetchingProducts.splice(index, 1);
    this.city.removeFromTradeFleet(caravan);
  }
}

function getClosetProducer(productName) {
  // TODO: this is a hack for now
  // should i enact a foreign policy?
  return "bar"; // HACK: PLZ STOP
  //help me
}

function createSimpleTradeMission(caravan, route, itemType, quantity) {
  return [
    new TravelAction(caravan, route.homeCity, route.destination),
    new BuyAction(caravan, route.destination, itemType, -quantity),
    new TravelAction(caravan, route.destination, route.homeCity),
    new OffloadAction(caravan, route.homeCity, itemType, quantity),
  ];
}
