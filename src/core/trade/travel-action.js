import {getVector} from '../../helpers/vector';

const SPEED = 20;

export default class TravelAction {
    #caravan = null;
    #direction = null;
    #unitsCompleted = 0;
    #legTotalDistance = null;
    
  constructor(caravan, sourceCity, destinationCity) {
      this.#caravan = caravan;

      this.destinationCity = destinationCity;
      this.sourceCity = sourceCity;
      this.currentLocation = sourceCity.location;

      const v = getVector(sourceCity.location, destinationCity.location);
      this.#direction = v.normalise();
      this.#legTotalDistance = v.length();
  }

  execute(deltaTime) {
    //calculate the time
    const distance = calculateWorldDistance(deltaTime, SPEED);
    const v = this.#direction.multiply(distance);
    const nextLocation = this.currentLocation.add(v);
    this.currentLocation = nextLocation;

    //calculate leg completion
    this.#unitsCompleted += distance;
    if (this.#unitsCompleted >= this.#legTotalDistance) {
        return true;
    }

    return false;
  }

  draw(ctx){
    ctx.beginPath();
    const c1 = this.sourceCity.location;
    ctx.moveTo(c1.x, c1.y);
    const c2 = this.destinationCity.location;
    ctx.lineTo(c2.x, c2.y);
    // TODO: make this prettier but who cares right now
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);
  }
}

// TODO: split me out?
function calculateWorldDistance(time, unitPerTime) {
    // world ratio is currently set at 100
    const WORLD_RATIO = 1 / 100;
    return time * unitPerTime * WORLD_RATIO;
  }
  