export default class Crate{
    constructor(itemType, quantity){
        if (!itemType){
            throw Error("no item type for this crate");
        }

        if (!quantity){
            throw Error(`invalid quantity ${quantity}`);
        }

        this.itemType = itemType;
        this.quantity = quantity;
    }
}