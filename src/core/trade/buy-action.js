import Crate from "../inventory/crate";

const LOADTIME = 1000;

export default class BuyAction{
    #executed = false;
    #elapsedTime = 0;
    constructor(caravan, targetCity, itemType, quantity){
        this.caravan = caravan;
        this.itemType = itemType;
        this.targetCity = targetCity;
        this.quantity = quantity;
        this.currentLocation = targetCity.location;

    }

    #canExecute(){
        // check target city has the goods
        return this.targetCity.warehouse.hasItems(this.itemType, this.quantity);
    }

    execute(deltaTime){
        if (!this.#canExecute()){
            return false;
        }
        this.#elapsedTime += deltaTime;
        if (this.#elapsedTime >= LOADTIME) {
          const takenQuantity = this.targetCity.warehouse.take(this.itemType, this.quantity);
          this.cargo = new Crate(this.itemType, takenQuantity);
          this.caravan.cargo = this.cargo.quantity;
          return true;
        }
    
        return false;

    }

    draw(ctx){
        ctx.fillStyle = "green";
        ctx.fillRect(this.currentLocation.x, this.currentLocation.y, 5, 5);
    }
}


