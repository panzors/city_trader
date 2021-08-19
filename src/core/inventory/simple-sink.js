import TimeSensitive from "../time-sensitive";

const LOWEST_BOUND = -10;

export default class SimpleSink extends TimeSensitive{
    #quantity = 0;
    #options;
    #currentDemand = 0;
    
    constructor(itemType, quantity, interval, options){
        super(interval);
        this.itemType = itemType;
        this.#quantity = quantity;
        this.#options = options || {};
    }

    /**
     * Negative demand means it has enough supplies.
     */
    get currentDemand(){
        return this.#currentDemand;
    }

    execute(){
        this.#currentDemand += this.#quantity;

        if (this.#options.maxDemand < this.#currentDemand){
            if (this.#options.maxDemandConsequence){
                this.#options.maxDemandConsequence();
            }
        }
    }

    quenchDemand(quantity){
        if (this.#currentDemand - quantity < LOWEST_BOUND){
            return false;
        }

        this.#currentDemand -= this.#quantity;
        return true;
    }

    
}