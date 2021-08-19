import Crate from "./crate";
import { PRODUCTS } from "../../data/products";
export default class Warehouse{
    #stock; 
    #options;

    constructor(defaultStock, options){
        this.#stock = defaultStock || {};
        this.#options = options || {};
    }

    takeAll(){
        const results = [];
        for (const [itemTypeName, quantity] of Object.entries(this.#stock)) {
            const itemType = PRODUCTS[itemTypeName];
            results.push(new Crate(itemType, this.take(itemType, quantity)));
        }

        this.#stock = {};
        return results;
    }

    take(itemType, quantity){
        if (this.hasItems(itemType,quantity)){
            this.#stock[itemType.name] -= quantity;
            return quantity;
        }

        return 0;
    }

    canReceive(itemType, quantity){
        // TODO: build warehouse limiters
        return true;
    }

    receive(itemType, quantity){
        if (this.canReceive(itemType,quantity)){
            if (!this.#stock[itemType.name]){
                this.#stock[itemType.name] = 0;
            }
            
            this.#stock[itemType.name] += quantity;
            return true;
        } else {
            return false;
        }
    }

    reserve(itemType, quantity){
        // TODO: build out a reservation system
    }

    release(itemType, quantity){
        // TODO: release the resource for someone else
    }

    hasItems(itemType, quantity){
        if (!itemType){
            throw Error("item type not set");
        }
        if (!quantity || quantity < 0){
            throw Error("invalid quantity");
        }
        
        const store = this.#stock[itemType.name];
        if (store){
            return store >= quantity;
        }

        return false;
    }
}