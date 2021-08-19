import { RAW_PRODUCTION_RECIPE} from '../data/products';
import Factory from "./inventory/factory";
import TimeSensitive from "./time-sensitive";

export default class ProducerProfile extends TimeSensitive{
    #warehouse = null;
    #sources = [];

    constructor(warehouse){
        super(0);
        this.#warehouse = warehouse;
        this.#sources = [new Factory(this.#warehouse, RAW_PRODUCTION_RECIPE.wood)];
    }

    execute(){
        this.#sources.forEach(factory => {
            const crates = factory.takeAllStock();
            crates.forEach(crate => {
                this.#warehouse.receive(crate.itemType, crate.quantity);
            });
        });
    }
        
    passTime(deltaTime){
        super.passTime(deltaTime);

        this.#sources.forEach(pipe => {
            pipe.passTime(deltaTime);
            //add to warehouse
        });
    }
}