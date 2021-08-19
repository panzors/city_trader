import Warehouse from "./warehouse";
import CraftingRecipe from "./crafting-recipe";
import TimeSensitive from "../time-sensitive";
import Crate from "./crate";

export default class Factory extends TimeSensitive{
    #craftingRecipe;
    #warehouse;
    #localWarehouse;
    #options;

    /**
     * 
     * @param {Warehouse} warehouse 
     * @param {CraftingRecipe} craftingRecipe 
     * @param {*} options 
     */
    constructor(warehouse, craftingRecipe, options){
        super(craftingRecipe.duration);
        this.#warehouse = warehouse;
        this.#craftingRecipe = craftingRecipe;
        this.#options = options;
        this.#localWarehouse = new Warehouse();
    }

    shouldPassTime(){
        if (this.#craftingRecipe.inputs?.length > 0){
            const hasItems = this.#craftingRecipe.inputs.map(crate => {
                return this.#warehouse.hasItems(crate.itemType, crate.quantity);
            });
            return hasItems.every(x => x === true);
        }
        
        return true;
    }

    execute(){
        this.#craftingRecipe.outputs.forEach(item => {
            this.#localWarehouse.receive(item.itemType, item.quantity);
        });
    }

    /**
     * 
     * @returns {Crate[]}
     */
    takeAllStock(){
        const crates = this.#localWarehouse.takeAll();
        return crates;
    }
}

